import {IGpsLocation} from "./IGpsLocation";
import {IId} from "./IId";
import {IUser} from "./IUser";

export interface IAddress extends IId {
  user: IUser;
  description: string;

  name: string;
  prename: string;
  street: string;
  number: string;
  addition: string;
  zipcode: string;
  city: string;
  gpsLocation: IGpsLocation;
}
