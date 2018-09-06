import {CustomerOrderItemDto} from "./customer-order-item-dto";
import {DtoId} from "./dto-id";
import {UserInfoDto} from "./user-info-dto";

export class CustomerOrderDto implements DtoId {

  public id?: number;
  public date: Date;
  public totalPrice: number;
  public userId?: number;
  public user?: UserInfoDto;
  public customerOrderItems?: CustomerOrderItemDto[];


  constructor(customerOrderDto: CustomerOrderDto) {
    this.id = customerOrderDto.id;
    this.date = customerOrderDto.date;
    this.totalPrice = customerOrderDto.totalPrice;
    this.userId = customerOrderDto.userId;
    this.user = customerOrderDto.user;
    this.customerOrderItems = customerOrderDto.customerOrderItems;
  }

  public static createEmpty(): CustomerOrderDto {
    return new CustomerOrderDto({
      date: new Date(),
      totalPrice: 0
    });
  }

  static createWithId(id: number, customerOrder: CustomerOrderDto): CustomerOrderDto {
    const to = new CustomerOrderDto(customerOrder);
    to.id = id;
    return to;
  }
}
