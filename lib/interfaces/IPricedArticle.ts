import {IArticle} from "./IArticle";
import {ICustomerOrderItem} from "./ICustomerOrderItem";
import {IId} from "./IId";

export interface IPricedArticle extends IId {
  article: IArticle,
  price: number,
  validFrom: Date,
  validTo?: Date,
  customOrderItems: ICustomerOrderItem[],
}
