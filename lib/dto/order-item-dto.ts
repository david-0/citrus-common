import {ArticleDto} from "./article-dto";
import {DtoId} from "./dto-id";
import {OrderDto} from "./order-dto";

export class OrderItemDto implements DtoId {

  public id?: number;
  public article: ArticleDto;
  public copiedPrice: number;
  public quantity: number;
  public order?: OrderDto;

  constructor(orderItem: OrderItemDto) {
    this.id = orderItem.id;
    this.order = orderItem.order;
    this.article = orderItem.article;
    this.copiedPrice = orderItem.copiedPrice;
    this.quantity = orderItem.quantity;
  }

  public static createEmpty(): OrderItemDto {
    return new OrderItemDto({
      article: ArticleDto.createEmpty(),
      copiedPrice: 0,
      quantity: 0,
      order: OrderDto.createEmpty(),
    });
  }

  static createWithId(id: number, orderItem: OrderItemDto): OrderItemDto {
    const to = new OrderItemDto(orderItem);
    to.id = id;
    return to;
  }
}
