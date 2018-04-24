import {IId} from "./IId";

export interface IOpeningHours extends IId{
  fromDate: Date;
  toDate: Date;
}
