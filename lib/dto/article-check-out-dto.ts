import {DtoId} from "../dto/dto-id";
import {ArticleStockDto} from "./article-stock-dto";
import {UserDto} from "./user-dto";

export class ArticleCheckOutDto implements DtoId {

  public id?: number;
  public articleStock?: ArticleStockDto;
  public quantity: number;
  public plannedDate: Date;
  public done: boolean;
  public comment: string;
  public doneUser?: UserDto;

  constructor(articleCheckOut: ArticleCheckOutDto) {
    this.id = articleCheckOut.id;
    this.articleStock = articleCheckOut.articleStock;
    this.quantity = articleCheckOut.quantity;
    this.plannedDate = articleCheckOut.plannedDate;
    this.done = articleCheckOut.done;
    this.comment = articleCheckOut.comment;
    this.doneUser = articleCheckOut.doneUser;
  }

  public static createEmpty(): ArticleCheckOutDto {
    return new ArticleCheckOutDto({
        articleStock: ArticleStockDto.createEmpty(),
        quantity: 0,
        plannedDate: new Date(),
        done: false,
        comment: "",
        doneUser: UserDto.createEmpty(),
      }
    );
  }

  static createWithId(id: number, articleCheckInDto: ArticleCheckOutDto): ArticleCheckOutDto {
    const to = new ArticleCheckOutDto(articleCheckInDto);
    to.id = id;
    return to;
  }
}
