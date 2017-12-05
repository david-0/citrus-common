import {EArticleStatus} from "./EArticleStatus";
import {IId} from "./IId";
import {IPricedArticle} from "./IPricedArticle";
import {IUnitOfMeasurement} from "./IUnitOfMeasurement";
import {IVendorOrderItem} from "./IVendorOrderItem";

export interface IArticle extends IId {
  number: number;  // readonly
  description: string;
  stock: number;
  unitOfMeasurement: IUnitOfMeasurement;
  status: EArticleStatus;
  visibleFrom: Date;
  vendorOrderItems: IVendorOrderItem[];
  pricedArticles: IPricedArticle[];
}
