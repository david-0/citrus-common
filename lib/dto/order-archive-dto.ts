import {IDtoId} from "./i-dto-id";
import {OrderDto} from "./order-dto";
import {UserDto} from "./user-dto";

export class OrderArchiveDto implements IDtoId {
  constructor(public id: number, public archiveDate: Date, public archiveUser: UserDto, public order: OrderDto) {
  }
}
