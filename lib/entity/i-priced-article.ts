import {IArticle} from "./i-article";
import {ICustomerOrderItem} from "./i-customer-order-item";
import {IId} from "./i-id";

export interface IPricedArticle extends IId {
  article: IArticle,
  price: number,
  validFrom: Date,
  validTo?: Date,
  customOrderItems: ICustomerOrderItem[],
}
