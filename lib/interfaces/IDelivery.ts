import {IArticle} from "./IArticle";
import {IId} from "./IId";
import {IOrderItem} from "./IOrderItem";
import {IPickupLocation} from "./IPickupLocation";

export interface IDelivery extends IId {
  date: Date;
  comment: string;
  articles: IArticle[];
  orderItems: IOrderItem[];
  pickupLocations: IPickupLocation[];
}
