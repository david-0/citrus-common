import {DtoId} from "./dto-id";

export interface DtoUserInfo extends DtoId {
  number: number;
  email: string;
  name: string;
  prename: string;
  phone: string;
  mobile: string;
  addressesIds: DtoId[];
  customerOrders: DtoId[];
}
