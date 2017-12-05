import {ICustomerOrder} from "./ICustomerOrder";
import {IId} from "./IId";
import {IPricedArticle} from "./IPricedArticle";

export interface ICustomerOrderItem extends IId {
  order: ICustomerOrder;
  article: IPricedArticle;
  quantity: number;
}
