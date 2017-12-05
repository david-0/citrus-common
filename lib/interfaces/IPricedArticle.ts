import {IArticle} from "./IArticle";

export interface IPricedArticle {
  article: IArticle,
  price: number,
  validFrom: Date,
  validTo?: Date,
}
