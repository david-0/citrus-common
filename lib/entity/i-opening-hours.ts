import {IId} from "./i-id";

export interface IOpeningHours extends IId{
  fromDate: Date;
  toDate: Date;
}
