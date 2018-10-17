import {ArticleDto} from "./article-dto";
import {DtoId} from "./dto-id";
import {OrderLocationDto} from "./order-location-dto";

export class OrderItemDto implements DtoId {

  public id?: number;
  public article: ArticleDto;
  public copiedPrice: number;
  public quantity: number;
  public orderLocation?: OrderLocationDto;

  constructor(orderItem: OrderItemDto) {
    this.id = orderItem.id;
    this.orderLocation = orderItem.orderLocation;
    this.article = orderItem.article;
    this.copiedPrice = orderItem.copiedPrice;
    this.quantity = orderItem.quantity;
  }

  public static createEmpty(): OrderItemDto {
    return new OrderItemDto({
      article: ArticleDto.createEmpty(),
      copiedPrice: 0,
      quantity: 0,
      orderLocation: OrderLocationDto.createEmpty(),
    });
  }

  static createWithId(id: number, orderItem: OrderItemDto): OrderItemDto {
    const to = new OrderItemDto(orderItem);
    to.id = id;
    return to;
  }
}
