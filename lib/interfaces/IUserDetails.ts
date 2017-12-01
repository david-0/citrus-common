import {IId} from "./IId";

export interface IUserDetails extends IId {
  email: string;
  name: string;
  prename: string;
  telNumber: string;
  mobileNumber: string;
}
