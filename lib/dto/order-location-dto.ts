import {DtoId} from "./dto-id";
import {OpeningHourDto} from "./opening-hour-dto";
import {OrderDto} from "./order-dto";
import {OrderItemDto} from "./order-item-dto";

export class OrderLocationDto implements DtoId {
  public id?: number;
  public order?: OrderDto;
  public orderItems?: OrderItemDto[];
  public totalLocationPrice: number;
  public plannedCheckout?: OpeningHourDto;
  public checkedOut: boolean;
  public checkedOutDate?: Date;
  public checkingOutUser?: Date;

  constructor(orderLocation: OrderLocationDto) {
    this.id = orderLocation.id;
    this.order = orderLocation.order;
    this.orderItems = orderLocation.orderItems;
    this.totalLocationPrice = orderLocation.totalLocationPrice;
    this.plannedCheckout = orderLocation.plannedCheckout;
    this.checkedOut = orderLocation.checkedOut;
    this.checkedOutDate = orderLocation.checkedOutDate;
    this.checkingOutUser = orderLocation.checkingOutUser;
  }

  public static createEmpty(): OrderLocationDto {
    return new OrderLocationDto({
      totalLocationPrice: 0,
      checkedOut: false,
    });
  }

  static createWithId(id: number, orderLocation: OrderLocationDto): OrderLocationDto {
    const to = new OrderLocationDto(orderLocation);
    to.id = id;
    return to;
  }
}
