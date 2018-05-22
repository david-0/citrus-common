import {DtoAddress} from "./dto-address";
import {DtoId} from "./dto-id";

export interface DtoUserInfoWithAddresses extends DtoId {
  number: number;
  email: string;
  name: string;
  prename: string;
  phone: string;
  mobile: string;
  addresses: DtoAddress[];
  customerOrders: DtoId[];
}
