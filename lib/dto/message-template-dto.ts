import {IDtoId} from "./dto-id";

export class MessageTemplateDto implements IDtoId {
  public id?: number;
  constructor(public subject: string, public content: string) {
  }
}
