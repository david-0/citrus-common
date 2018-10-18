import {CartItemDto} from "./cart-item-dto";

export class CartLocationDto {
  public cartItems: CartItemDto[];
  public openingHourIdOfPlannedCheckout?: number;

  constructor(public locationId: number) {
    this.cartItems = [];
  }
}
