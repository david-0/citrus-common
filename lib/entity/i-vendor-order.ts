import {IId} from "./i-id";
import {IVendorOrderItem} from "./i-vendor-order-item";

export interface IVendorOrder extends IId {
  number: number;
  comment: string;
  arrivalDate: Date;
  saleDate: Date;
  vendorOrderItems: IVendorOrderItem[];
}
