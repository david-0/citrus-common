import {CartEntryDto} from "./cart-entry-dto";

export class CartDto {
  public cartEntries: CartEntryDto[];
  public pickupLocationId: number;
}
