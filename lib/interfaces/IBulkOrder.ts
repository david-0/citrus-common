import {ICustomerOrder} from "./ICustomerOrder";
import {IId} from "./IId";
import {IPickupLocation} from "./IPickupLocation";

export interface IBulkOrder extends IId {
  pickupLocation: IPickupLocation;
  customerOrders: ICustomerOrder[];
}
