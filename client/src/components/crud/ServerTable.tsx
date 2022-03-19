import React, { useEffect } from "react";
import { ServerModel } from "../../react-app-env";
import ServerService from "../../services/ServerService";
import { GetAllServers } from "../crud/GetAllServers";
import { AddNewServer } from "./AddNewServer";


export const  ServerTable: React.FC =() => {
  // const ServerTypes: any = {
  //   "t1.micro": { name: "t1.micro", pricePerMin: 0.043 },
  //   "t1.xl": { name: "t1.xl", pricePerMin: 0.1 },
  //   "t2.xxl": { name: "t2.xxl", pricePerMin: 0.5 },
  // };
  // const initialServerState: any = {
  //   Name: "",
  //   IP: "",
  //   user_input_type: "",
  //   Type: ServerTypes["t1.micro"],
  //   isRunning: false,
  //   openTimes: [],
  // };

  const [data, setData] = React.useState<ServerModel>();
  const [server, setServer] = React.useState([]);
  const [submitted, setSubmitted] = React.useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await ServerService.getAllServers();
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Server Table:</h1>
      <GetAllServers data={data} setData={setData} />
      <AddNewServer setServer={setServer} setSubmitted={setSubmitted} submitted={submitted} server={server} />
    </>
  );
}
