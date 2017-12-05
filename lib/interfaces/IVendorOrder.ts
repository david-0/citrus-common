import {IId} from "./IId";
import {IVendorOrderItem} from "./IVendorOrderItem";

export interface IVendorOrder extends IId {
  number: number;
  comment: string;
  arrivalDate: Date;
  saleDate: Date;
  vendorOrderItems: IVendorOrderItem[];
}
