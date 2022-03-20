import React from "react";
import { Button, Table, Toggle } from "rsuite";
import { ServerModel } from "../react-app-env";
import ServerService from "../services/ServerService";

export const ServersTable: React.FC<{
  data: ServerModel[];
  setData: React.Dispatch<React.SetStateAction<ServerModel[]>>;
}> = ({ data, setData }) => {
  
  // Calculates the time in minutes that the server runs & multiplies by the price of the server type:
  data = data.map((server) => {
    const activityMinutesToPay =
      server.openTimes
        .map((openTime: number, index) => {
          return (server.closeTimes[index] || Date.now()) - openTime;
        })
        .reduce((acc: number, time: number) => acc + time, 0) / 60000;
    const totalCost = activityMinutesToPay * server.serverType.serverTypePricePerMin;
    return {
      ...server,
      activityMinutesToPay,
      totalCost,
    };

    // --- //
  });
  return (
    <Table width={1075} bordered cellBordered height={350} data={data}>
      <Table.Column width={200} align="center">
        <Table.HeaderCell>IP Address</Table.HeaderCell>
        <Table.Cell dataKey="serverIP" />
      </Table.Column>

      <Table.Column width={200} align="center">
        <Table.HeaderCell>Server Name</Table.HeaderCell>
        <Table.Cell dataKey="serverName" />
      </Table.Column>

      <Table.Column width={200} align="center">
        <Table.HeaderCell>Activity Time Cost</Table.HeaderCell>
        <Table.Cell dataKey="totalCost"></Table.Cell>
      </Table.Column>

      <Table.Column width={100} align="center">
        <Table.HeaderCell>Toggle</Table.HeaderCell>
        <Table.Cell dataKey="isRunning">
          {(rowData) => {
            const handleUpdateStatus = async (status: boolean) => {
              let statusData = {
                isRunning: status,
              };
              await ServerService.updateStatus(rowData._id, statusData);
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
        <Table.Cell dataKey="serverType.serverTypeName" />
      </Table.Column>

      <Table.Column width={120} align="center">
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.Cell dataKey="serverType.serverTypePricePerMin" />
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
