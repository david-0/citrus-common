import {CartLocationDto} from "./cart-location-dto";

export class CartDto {
  constructor(public cartLocations: CartLocationDto[], public totalPrice: number) {
  }
}
