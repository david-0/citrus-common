import {EArticleStatus} from "./e-article-status";
import {IId} from "./i-id";
import {IPickupLocation} from "./i-pickup-location";
import {IPricedArticle} from "./i-priced-article";
import {IUnitOfMeasurement} from "./i-unit-of-measurement";
import {IVendorOrderItem} from "./i-vendor-order-item";

export interface IArticle extends IId {
  number: number;  // readonly
  description: string;
  stock: number;
  unitOfMeasurement: IUnitOfMeasurement;
  status: EArticleStatus;
  visibleFrom: Date;
  vendorOrderItems: IVendorOrderItem[];
  pricedArticles: IPricedArticle[];
  pickupLocations: IPickupLocation[];
}
