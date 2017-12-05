import {IId} from "./IId";
import {ICustomerOrderItem} from "./ICustomerOrderItem";
import {IUser} from "./IUser";

export interface ICustomerOrder extends IId {
  number: number;
  description: string;
  date: Date;
  totalPrice: number;
  user: IUser;
  orderItems: ICustomerOrderItem[];
}
