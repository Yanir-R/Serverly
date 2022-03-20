/// <reference types="react-scripts" />

export interface ServerModel {
  _id?: string;
  serverName: string;
  serverIP: string;
  serverType: {
    serverTypeName: string;
    serverTypePricePerMin: number;
  };
  isRunning: boolean;
  openTimes: number[];
  closeTimes: number[];
  userInputType: string;
  totalCost: number;
  activityMinutesToPay: number;
}
