import {DtoId} from "./dto-id";
import {UserDto} from "./user-dto";

export class MessageDto implements DtoId {
  public id?: number;
  public sendDate?: Date;
  public sendUser?: UserDto;
  public responses?: string;
  constructor(public subject: string, public message: string, public receivers: UserDto[]) {
  }
}
