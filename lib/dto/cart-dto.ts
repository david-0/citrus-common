import {CartItemDto} from "./cart-item-dto";
import {LocationDto} from "./location-dto";
import {OpeningHourDto} from "./opening-hour-dto";

export class CartDto {
  public cartItems: CartItemDto[];
  public openingHourOfPlannedCheckout?: OpeningHourDto;

  constructor(public location: LocationDto, public totalPrice: number, public comment: string) {
    this.cartItems = [];
  }
}
