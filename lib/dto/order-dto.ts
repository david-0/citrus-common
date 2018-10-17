import {DtoId} from "./dto-id";
import {OrderLocationDto} from "./order-location-dto";
import {UserDto} from "./user-dto";

export class OrderDto implements DtoId {

  public id?: number;
  public date: Date;
  public totalPrice: number;
  public user?: UserDto;
  public orderLocations?: OrderLocationDto[];
  public completed: boolean;
  public completedDate?: Date;
  public completingUser?: UserDto;

  constructor(order: OrderDto) {
    this.id = order.id;
    this.date = order.date;
    this.totalPrice = order.totalPrice;
    this.user = order.user;
    this.orderLocations = order.orderLocations;
    this.completed = order.completed;
    this.completedDate = order.completedDate;
    this.completingUser = order.completingUser;
  }

  public static createEmpty(): OrderDto {
    return new OrderDto({
      date: new Date(),
      totalPrice: 0,
      completed: false,
    });
  }

  static createWithId(id: number, order: OrderDto): OrderDto {
    const to = new OrderDto(order);
    to.id = id;
    return to;
  }
}
