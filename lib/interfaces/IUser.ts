import {IAddress} from "./IAddress";
import {IId} from "./IId";

export interface IUser extends IId {
  email: string;
  password: string;
  name: string;
  prename: string;
  phone: string;
  mobile: string;
  addresses: IAddress[];
}
