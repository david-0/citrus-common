import {IAddress} from "./IAddress";
import {ICustomerOrder} from "./ICustomerOrder";
import {IId} from "./IId";

export interface IUserInfo extends IId {
  email: string;
  name: string;
  prename: string;
  phone: string;
  mobile: string;
  addresses: IAddress[];
  orders: ICustomerOrder[];
}
