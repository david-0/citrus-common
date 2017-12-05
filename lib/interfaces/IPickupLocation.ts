import {IAddress} from "./IAddress";
import {IArticle} from "./IArticle";
import {IId} from "./IId";
import {IOpeningHours} from "./IOpeningHours";

export interface IPickupLocation extends IId {
  address: IAddress;
  availableArticles: IArticle[];
  allArticles: boolean;
  openingHours: IOpeningHours[];
}
