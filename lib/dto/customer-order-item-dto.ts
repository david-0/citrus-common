import {ArticleDto} from "./article-dto";
import {CustomerOrderDto} from "./customer-order-dto";
import {DtoId} from "./dto-id";

export class CustomerOrderItemDto implements DtoId {

  public id?: number;
  public customerOrderId?: number;
  public articleId?: number;
  public article: ArticleDto;
  public copiedPrice: number;
  public quantity: number;

  constructor(customerOrderItem: CustomerOrderItemDto) {
    this.id = customerOrderItem.id;
    this.customerOrderId = customerOrderItem.customerOrderId;
    this.articleId = customerOrderItem.articleId;
    this.article = customerOrderItem.article;
    this.copiedPrice = customerOrderItem.copiedPrice;
    this.quantity = customerOrderItem.quantity;
  }

  public static createEmpty(customerOrder: CustomerOrderDto): CustomerOrderItemDto {
    return new CustomerOrderItemDto({
      customerOrderId: customerOrder.id,
      article: ArticleDto.createEmpty(),
      copiedPrice: 0,
      quantity: 0
    });
  }

  static createWithId(id: number, customerOrderItem: CustomerOrderItemDto): CustomerOrderItemDto {
    const to = new CustomerOrderItemDto(customerOrderItem);
    to.id = id;
    return to;
  }
}
