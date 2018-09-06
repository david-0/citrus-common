import {DtoId} from "../dto/dto-id";
import {ArticleCheckInDto} from "./article-check-in-dto";
import {ArticleCheckOutDto} from "./article-check-out-dto";
import {ArticleDto} from "./article-dto";
import {CustomerOrderItemDto} from "./customer-order-item-dto";
import {LocationDto} from "./location-dto";

export class ArticleStockDto implements DtoId {

  public id?: number;
  public article?: ArticleDto;
  public quantity: number;
  public reservedQuantity: number;
  public checkIns?: ArticleCheckInDto[];
  public checkOuts?: ArticleCheckOutDto[];
  public customerOrderItems?: CustomerOrderItemDto[];
  public location: LocationDto;

  constructor(articleStock: ArticleStockDto) {
    this.id = articleStock.id;
    this.article= articleStock.article;
    this.quantity = articleStock.quantity;
    this.reservedQuantity = articleStock.reservedQuantity;
    this.checkIns = articleStock.checkIns;
    this.checkOuts = articleStock.checkOuts;
    this.customerOrderItems = articleStock.customerOrderItems;
    this.location = articleStock.location;
  }

  public static createEmpty(article: ArticleDto, location: LocationDto): ArticleStockDto {
    return new ArticleStockDto({
      article: article,
      quantity: 0,
      reservedQuantity: 0,
      checkIns: [],
      checkOuts: [],
      customerOrderItems: [],
      location: location,
    });
  }

  static createWithId(id: number, address: ArticleDto): ArticleDto {
    const to = new ArticleDto(address);
    to.id = id;
    return to;
  }
}
