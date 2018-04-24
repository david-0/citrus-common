import {IGpsLocation} from "./i-gps-location";
import {IId} from "./i-id";
import {IUser} from "./i-user";

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
