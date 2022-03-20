/// <reference types="react-scripts" />

export interface ServerModel {
  _id?: string;
  Name: string;
  IP: string;
  Type: {
    name: string;
    pricePerMin: number;
  };
  isRunning: boolean;
  openTimes: number[];
  closeTimes: number[];
  userInputType: string;
  totalCost: number;
  activityMinutesToPay: number;
}
