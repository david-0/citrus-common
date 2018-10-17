import {CartItemDto} from "./cart-item-dto";
import {LocationDto} from "./location-dto";

export class CartLocationDto {
  public cartItems: CartItemDto[];
  public openingHourIdOfPlannedCheckout?: Date;

  constructor(public location: LocationDto) {
    this.cartItems = [];
  }
}
