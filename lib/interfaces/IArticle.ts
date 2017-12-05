import {EArticleStatus} from "./EArticleStatus";
import {IId} from "./IId";
import {IUnitOfMeasurement} from "./IUnitOfMeasurement";
import {IVendorOrderItem} from "./IVendorOrderItem";

export interface IArticle extends IId {
  number: number;  // readonly
  description: string;
  stock: number;
  unitOfMeasurement: IUnitOfMeasurement;
  status: EArticleStatus;
  visibleFrom: Date;
  shipmentItems: IVendorOrderItem[];
}
