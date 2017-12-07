import {IAddress} from "./IAddress";
import {ICustomerOrder} from "./ICustomerOrder";
import {IId} from "./IId";

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
