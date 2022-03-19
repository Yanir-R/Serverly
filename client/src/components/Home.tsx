import React from "react";
import { FlexboxGrid } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { ServerTable } from "./crud/ServerTable";
export const Home: React.FC = () => {
  return (
    <FlexboxGrid>
      <FlexboxGrid.Item colspan={24}>
        <div>Header!</div>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={24}>
        <ServerTable />
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={24}>
        <div>Footer</div>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};
