import {DtoId} from "../dto/dto-id";
import {ArticleStockDto} from "./article-stock-dto";
import {UserDto} from "./user-dto";

export class ArticleCheckInDto implements DtoId {

  public id?: number;
  public articleStock?: ArticleStockDto;
  public quantity: number;
  public plannedDate: Date;
  public comment: string;
  public done: boolean;
  public doneDate?: Date;
  public doneUser?: UserDto;

  constructor(articleCheckIn: ArticleCheckInDto) {
    this.id = articleCheckIn.id;
    this.articleStock = articleCheckIn.articleStock;
    this.quantity = articleCheckIn.quantity;
    this.plannedDate = articleCheckIn.plannedDate;
    this.comment = articleCheckIn.comment;
    this.done = articleCheckIn.done;
    this.doneDate = articleCheckIn.doneDate;
    this.doneUser = articleCheckIn.doneUser;
  }

  public static createEmpty(): ArticleCheckInDto {
    return new ArticleCheckInDto({
        articleStock: ArticleStockDto.createEmpty(),
        quantity: 0,
        plannedDate: new Date(),
        comment: "",
        done: false,
        doneUser: UserDto.createEmpty(),
      }
    );
  }

  static createWithId(id: number, articleCheckInDto: ArticleCheckInDto): ArticleCheckInDto {
    const to = new ArticleCheckInDto(articleCheckInDto);
    to.id = id;
    return to;
  }
}
