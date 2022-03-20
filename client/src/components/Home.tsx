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
    <FlexboxGrid justify="center">
      <FlexboxGrid.Item colspan={16}>
        <h1 style={{ display: "flex", justifyContent: "center" }}>Serverly</h1>
      </FlexboxGrid.Item>

      <FlexboxGrid.Item colspan={16}>
        <ServersTable data={data} setData={setData} />
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={10}>
        <AddNewServer />
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};
