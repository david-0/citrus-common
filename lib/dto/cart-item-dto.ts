import {ArticleDto} from "./article-dto";

export class CartItemDto {
  constructor(public article: ArticleDto, public quantity: number, public price: number) {
  }
}
