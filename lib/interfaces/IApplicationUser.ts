import {IId} from "./IId";

export interface IApplicationUser extends IId {
  email: string;
  password: string;
}
