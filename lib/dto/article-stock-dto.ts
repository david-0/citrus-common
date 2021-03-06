import {ArticleCheckInDto} from "./article-check-in-dto";
import {ArticleCheckOutDto} from "./article-check-out-dto";
import {ArticleDto} from "./article-dto";
import {DtoId} from "./dto-id";
import {LocationDto} from "./location-dto";
import {OrderItemDto} from "./order-item-dto";

export class ArticleStockDto implements DtoId {

  public id?: number;
  public article?: ArticleDto;
  public quantity: number;
  public reservedQuantity: number;
  public soldOut: boolean;
  public checkIns?: ArticleCheckInDto[];
  public checkOuts?: ArticleCheckOutDto[];
  public orderItems?: OrderItemDto[];
  public location: LocationDto;

  constructor(articleStock: ArticleStockDto) {
    this.id = articleStock.id;
    this.article = articleStock.article;
    this.quantity = articleStock.quantity;
    this.reservedQuantity = articleStock.reservedQuantity;
    this.soldOut = articleStock.soldOut;
    this.checkIns = articleStock.checkIns;
    this.checkOuts = articleStock.checkOuts;
    this.orderItems = articleStock.orderItems;
    this.location = articleStock.location;
  }

  public static createEmpty(): ArticleStockDto {
    return new ArticleStockDto({
      article: ArticleDto.createEmpty(),
      quantity: 0,
      reservedQuantity: 0,
      soldOut: false,
      checkIns: [],
      checkOuts: [],
      orderItems: [],
      location: LocationDto.createEmpty(),
    });
  }

  static createWithId(id: number, articleStock: ArticleStockDto): ArticleStockDto {
    const to = new ArticleStockDto(articleStock);
    to.id = id;
    return to;
  }
}
