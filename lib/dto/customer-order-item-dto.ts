import {ArticleStockDto} from "./article-stock-dto";
import {CustomerOrderDto} from "./customer-order-dto";
import {DtoId} from "./dto-id";

export class CustomerOrderItemDto implements DtoId {

  public id?: number;
  public customerOrder?: CustomerOrderDto;
  public articleId?: number;
  public articleStock: ArticleStockDto;
  public copiedPrice: number;
  public quantity: number;
  public checkedOut: boolean;

  constructor(customerOrderItem: CustomerOrderItemDto) {
    this.id = customerOrderItem.id;
    this.customerOrder = customerOrderItem.customerOrder;
    this.articleId = customerOrderItem.articleId;
    this.articleStock = customerOrderItem.articleStock;
    this.copiedPrice = customerOrderItem.copiedPrice;
    this.quantity = customerOrderItem.quantity;
    this.checkedOut = customerOrderItem.checkedOut;
  }

  public static createEmpty(): CustomerOrderItemDto {
    return new CustomerOrderItemDto({
      customerOrder: CustomerOrderDto.createEmpty(),
      articleStock: ArticleStockDto.createEmpty(),
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
