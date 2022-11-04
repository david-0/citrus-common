import {IDtoId} from "./dto-id";
import {UserDto} from "./user-dto";

export class MessageDto implements IDtoId {
  public id?: number;
  public sendDate?: Date;
  public sendUser?: UserDto;
  public responses?: string;
  constructor(public subject: string, public content: string, public receivers: UserDto[]) {
  }
}
