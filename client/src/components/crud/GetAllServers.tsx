import React from "react";
import { Button, Table, Toggle } from "rsuite";
import { ServerModel } from "../../react-app-env";
import ServerService from "../../services/ServerService";

export const GetAllServers: React.FC<any> = ({ data, setData }) => {
  return (
    <Table
      bordered
      cellBordered
      height={400}
      data={data}
      // onRowClick={(data: any) => {
      //   console.log(data);
      // }}
    >
      <Table.Column width={200} align="center">
        <Table.HeaderCell>IP Address</Table.HeaderCell>
        <Table.Cell dataKey="IP" />
      </Table.Column>

      <Table.Column width={200} align="center">
        <Table.HeaderCell>Server Name</Table.HeaderCell>
        <Table.Cell dataKey="Name" />
      </Table.Column>

      <Table.Column width={200} align="center">
        <Table.HeaderCell>Activity Time Cost</Table.HeaderCell>
        <Table.Cell dataKey="activityMinutesToPay"></Table.Cell>
      </Table.Column>

      <Table.Column width={100} align="center">
        <Table.HeaderCell>Toggle</Table.HeaderCell>
        <Table.Cell dataKey="isRunning">
          {(rowData) => {
            const handleUpdateStatus = async (status: any) => {
              let statusData: any = {
                isRunning: status,
              };

              // if current isRunning is TRUE, it will change to FALSE

              if (rowData.isRunning) {
                statusData["closeTimes"] = rowData.closeTimes.concat([Date.now()]);
                let activityMinutesToPay =
                  rowData.closeTimes
                    .map(function (item: any, index: any) {
                      return item - rowData.openTimes[index];
                    })
                    .reduce((partialSum: any, a: any) => partialSum + a, 0) / 60000;

                statusData["totalCost"] = rowData.Type.pricePerMin * activityMinutesToPay;

                statusData["activityMinutesToPay"] = activityMinutesToPay;
              } else {
                statusData["openTimes"] = rowData.openTimes.concat([Date.now()]);
              }

              await ServerService.updateStatus(rowData._id, statusData).then((res) => {
                data.filter((server: ServerModel) => server._id === rowData._id);
              });
            };

            return (
              <Toggle
                size="md"
                checkedChildren="Open"
                unCheckedChildren="Close"
                defaultChecked={rowData.isRunning}
                onChange={handleUpdateStatus}
              />
            );
          }}
        </Table.Cell>
      </Table.Column>

      <Table.Column width={100} align="center">
        <Table.HeaderCell>Type</Table.HeaderCell>
        <Table.Cell dataKey="Type.name" />
      </Table.Column>

      <Table.Column width={120} align="center">
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.Cell dataKey="Type.pricePerMin" />
      </Table.Column>

      <Table.Column width={120} align="center">
        <Table.HeaderCell>Action</Table.HeaderCell>
        <Table.Cell>
          {(rowData) => {
            const handleDeleteServer = async (_id: string) => {
              try {
                await ServerService.removeServer(rowData._id);
                setData(data.filter((server: ServerModel) => server._id !== rowData._id));
              } catch (error) {
                console.log(error);
              }
            };
            return (
              <span>
                <Button size="xs" onClick={(id: any) => handleDeleteServer(id)}>
                  Remove
                </Button>
              </span>
            );
          }}
        </Table.Cell>
      </Table.Column>
    </Table>
  );
};
