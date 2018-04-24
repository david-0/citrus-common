import {ICustomerOrder} from "./i-customer-order";
import {IId} from "./i-id";
import {IPickupLocation} from "./i-pickup-location";

export interface IBulkOrder extends IId {
  pickupLocation: IPickupLocation;
  customerOrders: ICustomerOrder[];
}
