import {DtoId} from "./dto-id";
import {LocationDto} from "./location-dto";
import {OpeningHourDto} from "./opening-hour-dto";
import {OrderItemDto} from "./order-item-dto";
import {UserDto} from "./user-dto";

export class OrderDto implements DtoId {

  public id?: number;
  public date: Date;
  public user?: UserDto;
  public location?: LocationDto;
  public orderItems?: OrderItemDto[];
  public totalPrice: number;
  public plannedCheckout?: OpeningHourDto;
  public checkedOut: boolean;
  public checkedOutDate?: Date;
  public checkingOutUser?: UserDto;


  constructor(order: OrderDto) {
    this.id = order.id;
    this.date = order.date;
    this.user = order.user;
    this.location = order.location;
    this.orderItems = order.orderItems;
    this.totalPrice = order.totalPrice;
    this.plannedCheckout = order.plannedCheckout;
    this.checkedOut = order.checkedOut;
    this.checkedOutDate = order.checkedOutDate;
    this.checkingOutUser = order.checkingOutUser;
  }

  public static createEmpty(): OrderDto {
    return new OrderDto({
      date: new Date(),
      totalPrice: 0,
      checkedOut: false,
      location: LocationDto.createEmpty();
    });
  }

  static createWithId(id: number, order: OrderDto): OrderDto {
    const to = new OrderDto(order);
    to.id = id;
    return to;
  }
}
