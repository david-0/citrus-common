import {IId} from "./IId";
import {IVendorOrder} from "./IVendorOrder";
import {IArticle} from "./IArticle";

export interface IVendorOrderItem extends IId {
  vendorOrder: IVendorOrder;
  article: IArticle;
  orderedQuantity: number;
  useableQuantity: number;
  comment: string;
}
