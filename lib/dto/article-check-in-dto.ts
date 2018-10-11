import {DtoId} from "../dto/dto-id";
import {ArticleStockDto} from "./article-stock-dto";
import {UserDto} from "./user-dto";

export class ArticleCheckInDto implements DtoId {

  public id?: number;
  public articleStock?: ArticleStockDto;
  public quantity: number;
  public date: Date;
  public done: boolean;
  public comment: string;
  public user?: UserDto;

  constructor(articleCheckIn: ArticleCheckInDto) {
    this.id = articleCheckIn.id;
    this.articleStock = articleCheckIn.articleStock;
    this.quantity = articleCheckIn.quantity;
    this.date = articleCheckIn.date;
    this.done = articleCheckIn.done;
    this.comment = articleCheckIn.comment;
    this.user = articleCheckIn.user;
  }

  public static createEmpty(): ArticleCheckInDto {
    return new ArticleCheckInDto({
        articleStock: ArticleStockDto.createEmpty(),
        quantity: 0,
        date: new Date(),
        comment: "",
        done: false,
        user: UserDto.createEmpty(),
      }
    );
  }

  static createWithId(id: number, articleCheckInDto: ArticleCheckInDto): ArticleCheckInDto {
    const to = new ArticleCheckInDto(articleCheckInDto);
    to.id = id;
    return to;
  }
}
