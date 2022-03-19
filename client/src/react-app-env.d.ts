/// <reference types="react-scripts" />

export interface ServerModel {
  _id?: string;
  Name: string;
  IP: string;
  Type?: {
    name?: string;
    pricePerMin?: number;
  };
  s;
  isRunning?: boolean;
}
