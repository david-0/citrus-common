import {CartEntryDto} from "./cart-entry-dto";
import {DtoId} from "./dto-id";

export class CartDto implements DtoId {
  constructor(
    public cartEntries: CartEntryDto[],
    public id?: number) {
  }
}
