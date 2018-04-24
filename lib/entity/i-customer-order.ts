import {IBulkOrder} from "./i-bulk-order";
import {IId} from "./i-id";
import {ICustomerOrderItem} from "./i-customer-order-item";
import {IUser} from "./i-user";

export interface ICustomerOrder extends IId {
  number: number;
  description: string;
  date: Date;
  totalPrice: number;
  user: IUser;
  customOrderItems: ICustomerOrderItem[];
  bulkOrder: IBulkOrder;
}
