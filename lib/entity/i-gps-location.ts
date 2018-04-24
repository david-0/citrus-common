import {IId} from "./i-id";

export interface IGpsLocation extends IId {
  latitude: number;
  longitude: number;
}
