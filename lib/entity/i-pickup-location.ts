import {IAddress} from "./i-address";
import {IArticle} from "./i-article";
import {IId} from "./i-id";
import {IOpeningHours} from "./i-opening-hours";

export interface IPickupLocation extends IId {
  address: IAddress;
  availableArticles: IArticle[];
  allArticles: boolean;
  openingHours: IOpeningHours[];
}
