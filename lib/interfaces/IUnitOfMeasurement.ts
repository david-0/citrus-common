import {IArticle} from "./IArticle";

export interface IUnitOfMeasurement {
  shortcut: string;
  description: string;
  articles: IArticle[];
}
