import {IId} from "./i-id";
import {IVendorOrder} from "./i-vendor-order";
import {IArticle} from "./i-article";

export interface IVendorOrderItem extends IId {
  vendorOrder: IVendorOrder;
  article: IArticle;
  orderedQuantity: number;
  useableQuantity: number;
  comment: string;
}
