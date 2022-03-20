import React, { ChangeEvent, useState } from "react";
import ServerService from "../../services/ServerService";
import { ServerModel } from "../../react-app-env";
export const AddNewServer: React.FC = () => {
  const [server, setServer] = useState<any>();
  const [submitted, setSubmitted] = useState(false);

  const ServerTypes: any = {
    "t1.micro": { name: "t1.micro", pricePerMin: 0.043 },
    "t1.xl": { name: "t1.xl", pricePerMin: 0.1 },
    "t2.xxl": { name: "t2.xxl", pricePerMin: 0.5 },
  };

  const initialServerState: ServerModel = {
    Name: "",
    IP: "",
    userInputType: "",
    Type: ServerTypes,
    isRunning: false,
    openTimes: [],
    closeTimes: [],
    totalCost: 0,
    activityMinutesToPay: 0,
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setServer({ ...server, [name]: value });
  };

  const newServer = () => {
    setServer(initialServerState);
    setSubmitted(false);
  };

  const saveServer = () => {
    const data = {
      Name: server.Name,
      IP: server.IP,
      userInputType: server.userInputType,
      Type: ServerTypes[server.userInputType],
      isRunning: server.isRunning,
      openTimes: server.openTimes,
      closeTimes: server.closeTimes,
      totalCost: server.totalCost,
      activityMinutesToPay: server.activityMinutesToPay,
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
          <button onClick={newServer}>Add New Server</button>
        </div>
      ) : (
        <div>
          <div>
            <div>
              <label>Server Name</label>
              <input type="text" name="Name" onChange={handleInputChange} />
            </div>
            <div>
              <label>Server IP</label>
              <input type="text" name="IP" onChange={handleInputChange} />
            </div>
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
            <div>
              <button className="btn btn-primary" onClick={saveServer}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
