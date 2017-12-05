import {ICustomerOrder} from "./ICustomerOrder";
import {IPickupLocation} from "./IPickupLocation";

export interface IBulkOrder {
  pickupLocation: IPickupLocation;
  customerOrders: ICustomerOrder[];
}
