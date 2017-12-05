import {ICustomerOrder} from "./ICustomerOrder";
import {IId} from "./IId";
import {IPricedArticle} from "./IPricedArticle";

export interface ICustomerOrderItem extends IId {
  customerOrder: ICustomerOrder;
  pricedArticle: IPricedArticle;
  quantity: number;
}
