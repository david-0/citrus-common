import {DtoUserInfo} from "./dto-user-info";

export interface DtoUser extends DtoUserInfo {
  password: string;
}
