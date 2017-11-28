import {IId} from "./IId";

export interface IGpsLocation extends IId {
  latitude: number;
  longitude: number;
}
