import {IArticle} from "./i-article";
import {IId} from "./i-id";

export interface IUnitOfMeasurement extends IId {
  shortcut: string;
  description: string;
  articles: IArticle[];
}
