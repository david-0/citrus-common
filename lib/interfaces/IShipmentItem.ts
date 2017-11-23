import {IId} from "./IId";
import {IShipment} from "./IShipment";
import {IArticle} from "./IArticle";

export interface IShipmentItem extends IId {
  shipment: IShipment;
  article: IArticle;
  amount: number;
  comment: string;
}
