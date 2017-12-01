import {IAddress} from "./IAddress";
import {IDelivery} from "./IDelivery";
import {IId} from "./IId";
import {IApplicationUser} from "./IApplicationUser";

export interface IPickupLocation extends IId {
  delivery: IDelivery;
  fromDate: Date;
  toDate: Date;
  contactUser: IApplicationUser;
  address: IAddress;
}
