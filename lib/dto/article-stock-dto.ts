import {ArticleDto} from "./article-dto";
import {IDtoId} from "./i-dto-id";
import {LocationDto} from "./location-dto";
import {OrderItemDto} from "./order-item-dto";

export class ArticleStockDto implements IDtoId {

  public id?: number;
  public article?: ArticleDto;
  public quantity: number;
  public reservedQuantity: number;
  public soldOut: boolean;
  public visible: boolean;
  public orderItems?: OrderItemDto[];
  public location: LocationDto;

  public static createEmpty(): ArticleStockDto {
    return new ArticleStockDto({
      article: ArticleDto.createEmpty(),
      quantity: 0,
      reservedQuantity: 0,
      soldOut: false,
      visible: false,
      orderItems: [],
      location: LocationDto.createEmpty(),
    });
  }

  static createWithId(id: number, articleStock: ArticleStockDto): ArticleStockDto {
    const to = new ArticleStockDto(articleStock);
    to.id = id;
    return to;
  }

  constructor(articleStock: ArticleStockDto) {
    this.id = articleStock.id;
    this.article = articleStock.article;
    this.quantity = articleStock.quantity;
    this.reservedQuantity = articleStock.reservedQuantity;
    this.soldOut = articleStock.soldOut;
    this.visible = articleStock.visible;
    this.orderItems = articleStock.orderItems;
    this.location = articleStock.location;
  }
}
