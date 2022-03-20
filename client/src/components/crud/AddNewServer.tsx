import React, { ChangeEvent, useState } from "react";
import ServerService from "../../services/ServerService";
import { ServerModel } from "../../react-app-env";
import { Button } from "rsuite";
export const AddNewServer: React.FC = () => {
  const [server, setServer] = useState<ServerModel>();
  const [submitted, setSubmitted] = useState(false);

  const ServerTypes: any = {
    "t1.micro": { serverTypeName: "t1.micro", serverTypePricePerMin: 0.043 },
    "t1.xl": { serverTypeName: "t1.xl", serverTypePricePerMin: 0.1 },
    "t2.xxl": { serverTypeName: "t2.xxl", serverTypePricePerMin: 0.5 },
  };

  const initialServerState: ServerModel = {
    serverName: "",
    serverIP: "",
    userInputType: "",
    serverType: ServerTypes,
    isRunning: false,
    openTimes: [],
    closeTimes: [],
    totalCost: 0,
    activityMinutesToPay: 0,
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setServer({ ...server, [name]: value } as ServerModel);
  };

  const newServer = () => {
    setServer(initialServerState);
    setSubmitted(false);
  };

  const saveServer = () => {
    const data = {
      serverName: server?.serverName,
      serverIP: server?.serverIP,
      userInputType: server?.userInputType,
      serverType: ServerTypes[server!.userInputType],
    };

    ServerService.createNewServer(data)
      .then((res) => {
        console.log("data ->", res.data);
        setServer(res.data);
        setSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Add New Server</h1>
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <Button color="cyan" appearance="primary" onClick={newServer}>
            Add New Server
          </Button>
        </div>
      ) : (
        <div>
          <div>
            <div>
              <label>Server Name</label>
              <br></br>
              <input
                type="text"
                aria-label="required"
                title="Enter Server Name"
                name="serverName"
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Server IP</label>
              <br></br>
              <input type="text" title="Enter Server IP" name="serverIP" onChange={handleInputChange} required />
            </div>
            <br></br>
            <div>
              <select
                title="Select your Server Type"
                name="userInputType"
                onChange={handleInputChange as unknown as React.ChangeEventHandler<HTMLSelectElement>}
              >
                <option value="t1.xl">Select Server</option>
                <option value="t1.xl">t1.xl</option>
                <option value="t1.micro">t1.micro</option>
                <option value="t2.xxl">t2.xxl</option>
              </select>
            </div>
            <br></br>
            <div>
              <Button color="cyan" appearance="primary" onClick={saveServer}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
