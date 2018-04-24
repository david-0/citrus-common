import {ICustomerOrder} from "./i-customer-order";
import {IId} from "./i-id";
import {IPricedArticle} from "./i-priced-article";

export interface ICustomerOrderItem extends IId {
  customerOrder: ICustomerOrder;
  pricedArticle: IPricedArticle;
  quantity: number;
}
