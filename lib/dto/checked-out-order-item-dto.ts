import {ArticleDto} from "./article-dto";
import {DtoId} from "./dto-id";
import {OrderDto} from "./order-dto";

export class CheckedOutOrderItemDto implements DtoId {

  public id?: number;
  public article: ArticleDto;
  public copiedPrice: number;
  public quantity: number;
  public order?: OrderDto;

  constructor(checkedOutOrderItem: CheckedOutOrderItemDto) {
    this.id = checkedOutOrderItem.id;
    this.order = checkedOutOrderItem.order;
    this.article = checkedOutOrderItem.article;
    this.copiedPrice = checkedOutOrderItem.copiedPrice;
    this.quantity = checkedOutOrderItem.quantity;
  }

  public static createEmpty(): CheckedOutOrderItemDto {
    return new CheckedOutOrderItemDto({
      article: ArticleDto.createEmpty(),
      copiedPrice: 0,
      quantity: 0,
      order: OrderDto.createEmpty(),
    });
  }

  static createWithId(id: number, checkedOutOrderItem: CheckedOutOrderItemDto): CheckedOutOrderItemDto {
    const to = new CheckedOutOrderItemDto(checkedOutOrderItem);
    to.id = id;
    return to;
  }
}
