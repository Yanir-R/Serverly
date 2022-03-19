import React from "react";
import ServerService from "../../services/ServerService";

export const AddNewServer: React.FC<any> = ({ setServer, setSubmitted, submitted, server }) => {
  const ServerTypes: any = {
    "t1.micro": { name: "t1.micro", pricePerMin: 0.043 },
    "t1.xl": { name: "t1.xl", pricePerMin: 0.1 },
    "t2.xxl": { name: "t2.xxl", pricePerMin: 0.5 },
  };

  const initialServerState: any = {
    Name: "",
    IP: "",
    user_input_type: "",
    Type: ServerTypes["t1.micro"],
    isRunning: false,
    openTimes: [],
    closeTimes: [],
    totalCost: 0,
    activityMinutesToPay: 0,
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
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
      user_input_type: server.user_input_type,
      Type: ServerTypes[server.user_input_type],
      isRunning: server.isRunning,
      openTimes: server.openTimes,
      closeTimes: server.closeTimes,
      totalCost: server.totalCost,
      activityMinutesToPay: server.activityMinutesToPay,
    };
    ServerService.createNewServer(data)
      .then((res) => {
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
            <div className="form-group">
              <label>Server Name</label>
              <input
                type="text"
                className="form-control"
                name="Name"
                value={server.Name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Server IP</label>
              <input type="text" className="form-control" name="IP" value={server.IP} onChange={handleInputChange} />
            </div>
            <div>
              <select title="Select your Server Type" name="user_input_type" onChange={handleInputChange}>
                <option value="t1.xl">Select Server</option>
                <option value="t1.xl">t1.xl</option>
                <option value="t1.micro">t1.micro</option>
                <option value="t2.xxl">t2.xxl</option>
              </select>
            </div>
            <div className="form-group">
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
