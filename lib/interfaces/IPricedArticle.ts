import {IArticle} from "./IArticle";
import {ICustomerOrderItem} from "./ICustomerOrderItem";

export interface IPricedArticle {
  article: IArticle,
  price: number,
  validFrom: Date,
  validTo?: Date,
  customOrderItems: ICustomerOrderItem[],
}
