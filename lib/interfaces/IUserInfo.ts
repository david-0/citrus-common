import {IId} from "./IId";

export interface IUserInfo extends IId {
  email: string;
  name: string;
  prename: string;
  telNumber: string;
  mobileNumber: string;
}
