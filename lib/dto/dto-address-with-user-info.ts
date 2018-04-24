import {DtoId} from "./dto-id";
import {DtoUserInfo} from "./dto-user-info";

export interface DtoAddressWithUserInfo extends DtoId {
  user: DtoUserInfo;
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
