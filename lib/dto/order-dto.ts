import {IDtoId} from "./i-dto-id";
import {LocationDto} from "./location-dto";
import {OpeningHourDto} from "./opening-hour-dto";
import {OrderItemDto} from "./order-item-dto";
import {UserDto} from "./user-dto";

export class OrderDto implements IDtoId {

    public id?: number;
    public date: Date;
    public user?: UserDto;
    public location?: LocationDto;
    public comment: string;
    public orderItems?: OrderItemDto[];
    public totalPrice: number;
    public plannedCheckout?: OpeningHourDto;
    public deliveryNoteCreated?: Date;

    public static createEmpty(): OrderDto {
        return new OrderDto({
            date: new Date(),
            totalPrice: 0,
            comment: "",
            location: LocationDto.createEmpty(),
        });
    }

    static createWithId(id: number, order: OrderDto): OrderDto {
        const to = new OrderDto(order);
        to.id = id;
        return to;
    }

    constructor(order: OrderDto) {
        this.id = order.id;
        this.date = order.date;
        this.user = order.user;
        this.location = order.location;
        this.comment = order.comment;
        this.orderItems = order.orderItems;
        this.totalPrice = order.totalPrice;
        this.plannedCheckout = order.plannedCheckout;
        this.deliveryNoteCreated = order.deliveryNoteCreated;
    }
}
