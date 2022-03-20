import React, { useState, useEffect } from "react";
import { FlexboxGrid } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { api } from "../api";
import { ServerModel } from "../react-app-env";
import { AddNewServer } from "./crud/AddNewServer";
import { ServersTable } from "./ServersTable";
export const Home: React.FC = () => {
  const [data, setData] = useState<ServerModel[]>([]);

  useEffect(() => {
    setInterval(() => {
      api.getAllServersData(setData);
    }, 4500);
  }, []);

  return (
    <FlexboxGrid>
      <FlexboxGrid.Item colspan={24}>
        <div>Header!</div>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={24}>
        <h1>Server Table:</h1>
        <ServersTable data={data} setData={setData} />
        <AddNewServer />
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={24}>
        <div>Footer</div>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};
