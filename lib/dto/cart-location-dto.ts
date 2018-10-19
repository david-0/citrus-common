import {CartItemDto} from "./cart-item-dto";
import {LocationDto} from "./location-dto";
import {OpeningHourDto} from "./opening-hour-dto";

export class CartLocationDto {
  public cartItems: CartItemDto[];
  public openingHourOfPlannedCheckout?: OpeningHourDto;

  constructor(public location: LocationDto) {
    this.cartItems = [];
  }
}
