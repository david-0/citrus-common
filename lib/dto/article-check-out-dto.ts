import {ArticleStockDto} from "./article-stock-dto";
import {DtoId} from "./dto-id";
import {UserDto} from "./user-dto";

export class ArticleCheckOutDto implements DtoId {

  public id?: number;
  public articleStock?: ArticleStockDto;
  public quantity: number;
  public plannedDate: Date;
  public comment: string;
  public done: boolean;
  public doneDate?: Date;
  public doneUser?: UserDto;

  constructor(articleCheckOut: ArticleCheckOutDto) {
    this.id = articleCheckOut.id;
    this.articleStock = articleCheckOut.articleStock;
    this.quantity = articleCheckOut.quantity;
    this.plannedDate = articleCheckOut.plannedDate;
    this.comment = articleCheckOut.comment;
    this.done = articleCheckOut.done;
    this.doneDate = articleCheckOut.doneDate;
    this.doneUser = articleCheckOut.doneUser;
  }

  public static createEmpty(): ArticleCheckOutDto {
    return new ArticleCheckOutDto({
        articleStock: ArticleStockDto.createEmpty(),
        quantity: 0,
        plannedDate: new Date(),
        done: false,
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
