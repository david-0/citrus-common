import {IAddress} from "./i-address";
import {ICustomerOrder} from "./i-customer-order";
import {IId} from "./i-id";

export interface IUserInfo extends IId {
  number: number;
  email: string;
  name: string;
  prename: string;
  phone: string;
  mobile: string;
  addresses: IAddress[];
  customerOrders: ICustomerOrder[];
}
