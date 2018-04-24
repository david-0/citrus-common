import {DtoId} from "./dto-id";

export interface DtoAddress extends DtoId {
  userId: DtoId;
  description: string;
  name: string;
  prename: string;
  street: string;
  number: string;
  addition: string;
  zipcode: string;
  city: string;
  gpsLocationId: DtoId;
}
