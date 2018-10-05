import {DtoId} from "../dto/dto-id";
import {ArticleCheckInDto} from "./article-check-in-dto";
import {ArticleStockDto} from "./article-stock-dto";
import {UserDto} from "./user-dto";

export class ArticleCheckOutDto implements DtoId {

  public id?: number;
  public articleStock?: ArticleStockDto;
  public quantity: number;
  public date: Date;
  public comment: string;
  public user?: UserDto;

  constructor(articleCheckOut: ArticleCheckOutDto) {
    this.id = articleCheckOut.id;
    this.articleStock = articleCheckOut.articleStock;
    this.quantity = articleCheckOut.quantity;
    this.date = articleCheckOut.date;
    this.comment = articleCheckOut.comment;
    this.user = articleCheckOut.user;
  }

  public static createEmpty(articleStock: ArticleStockDto): ArticleCheckInDto {
    return new ArticleCheckOutDto({
        articleStock: articleStock,
        quantity: 0,
        date: new Date(),
        comment: "",
      }
    );
  }


  static createWithId(id: number, articleCheckInDto: ArticleCheckOutDto): ArticleCheckOutDto {
    const to = new ArticleCheckOutDto(articleCheckInDto);
    to.id = id;
    return to;
  }
}
