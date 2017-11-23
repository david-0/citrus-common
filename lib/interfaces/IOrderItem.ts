import {IDelivery} from "./IDelivery";
import {IId} from "./IId";
import {IOrder} from "./IOrder";

export interface IOrderItem extends IId {
  order: IOrder;
  articleId: number;
  articleNumber: number;
  articleDescription: string;
  articlePrice: string;
  articleAmount: number;
  acticleDelivery: IDelivery;
}
