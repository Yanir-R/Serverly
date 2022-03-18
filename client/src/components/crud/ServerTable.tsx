import React, { useEffect } from "react";
import { ServerModel } from "../../react-app-env";
import ServerService from "../../services/ServerService";

export default function ServerTable() {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await ServerService.getAllServers();
        console.log("my data ->", response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>ServerTable Page</h1>
      {data.map((server: ServerModel) => (
        <ul key={server.Name}>
          <li>Server Name - {server.Name}</li>
          <li>Server IP - {server.IP}</li>
          <li>Server Type - {server?.Type?.name}</li>
          <li>Server Price - {server?.Type?.PricePerMin}</li>
        </ul>
      ))}
    </div>
  );
}
