import {IId} from "./IId";
import {IVendorOrder} from "./IVendorOrder";
import {IArticle} from "./IArticle";

export interface IVendorOrderItem extends IId {
  shipment: IVendorOrder;
  article: IArticle;
  orderedAmount: number;
  useableAmount: number;
  comment: string;
}
