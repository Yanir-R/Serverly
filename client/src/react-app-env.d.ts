/// <reference types="react-scripts" />

export interface ServerModel {
  Name: string;
  IP: string;
  Type?: {
    name: string;
    PricePerMin: number;
  };
  isRunning?: boolean;
}
