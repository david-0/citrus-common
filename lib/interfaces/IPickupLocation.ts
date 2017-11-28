import {IAddress} from "./IAddress";
import {IDelivery} from "./IDelivery";
import {IId} from "./IId";
import {IUser} from "./IUser";

export interface IPickupLocation extends IId {
  delivery: IDelivery;
  fromDate: Date;
  toDate: Date;
  contactUser: IUser;
  address: IAddress;
}
