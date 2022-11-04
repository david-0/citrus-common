import {IDtoId} from "./dto-id";

export class MessageTemplateDto implements IDtoId {
  public id?: number;

  public static createEmpty(): MessagetTemplateDto {
    return new MessagetTemplateDto({
      subject: "",
      content: "",
    });
  }

  static createWithId(id: number, messageTemplateDto: MessageTemplateDto): MessageTemplateDto {
    const to = new MessageTemplateDto(messageTemplateDto);
    to.id = id;
    return to;
  }

  constructor(public subject: string, public content: string) {    
  }

  constructor(messageTemplate: MessageTemplateDto) {
    this.id = messageTemplate.id;
    this.subject = messageTemplate.subject;
    this.content = messageTemplate.content;
  }
}
