import {IArticle} from "./IArticle";
import {IId} from "./IId";

export interface IUnitOfMeasurement extends IId {
  shortcut: string;
  description: string;
  articles: IArticle[];
}
