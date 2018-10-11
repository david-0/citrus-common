import {DtoId} from "../dto/dto-id";
import {ArticleStockDto} from "./article-stock-dto";
import {UserDto} from "./user-dto";

export class ArticleCheckOutDto implements DtoId {

  public id?: number;
  public articleStock?: ArticleStockDto;
  public quantity: number;
  public date: Date;
  public done: boolean;
  public comment: string;
  public user?: UserDto;

  constructor(articleCheckOut: ArticleCheckOutDto) {
    this.id = articleCheckOut.id;
    this.articleStock = articleCheckOut.articleStock;
    this.quantity = articleCheckOut.quantity;
    this.date = articleCheckOut.date;
    this.done = articleCheckOut.done;
    this.comment = articleCheckOut.comment;
    this.user = articleCheckOut.user;
  }

  public static createEmpty(): ArticleCheckOutDto {
    return new ArticleCheckOutDto({
        articleStock: ArticleStockDto.createEmpty(),
        quantity: 0,
        date: new Date(),
        done: false,
        comment: "",
        user: UserDto.createEmpty(),
      }
    );
  }

  static createWithId(id: number, articleCheckInDto: ArticleCheckOutDto): ArticleCheckOutDto {
    const to = new ArticleCheckOutDto(articleCheckInDto);
    to.id = id;
    return to;
  }
}
