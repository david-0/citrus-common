import {ArticleDto} from "./article-dto";
import {ArticleStockDto} from "./article-stock-dto";
import {CustomerOrderDto} from "./customer-order-dto";
import {DtoId} from "./dto-id";
import {LocationDto} from "./location-dto";

export class CustomerOrderItemDto implements DtoId {

  public id?: number;
  public customerOrderId?: number;
  public articleId?: number;
  public articleStock: ArticleStockDto;
  public copiedPrice: number;
  public quantity: number;
  public checkedOut: boolean;

  constructor(customerOrderItem: CustomerOrderItemDto) {
    this.id = customerOrderItem.id;
    this.customerOrderId = customerOrderItem.customerOrderId;
    this.articleId = customerOrderItem.articleId;
    this.articleStock = customerOrderItem.articleStock;
    this.copiedPrice = customerOrderItem.copiedPrice;
    this.quantity = customerOrderItem.quantity;
    this.checkedOut = customerOrderItem.checkedOut;
  }

  public static createEmpty(customerOrder: CustomerOrderDto): CustomerOrderItemDto {
    return new CustomerOrderItemDto({
      customerOrderId: customerOrder.id,
      articleStock: ArticleStockDto.createEmpty(ArticleDto.createEmpty(), LocationDto.createEmpty()),
      copiedPrice: 0,
      quantity: 0,
      checkedOut: false,
    });
  }

  static createWithId(id: number, customerOrderItem: CustomerOrderItemDto): CustomerOrderItemDto {
    const to = new CustomerOrderItemDto(customerOrderItem);
    to.id = id;
    return to;
  }
}
