import {IDtoId} from "./i-dto-id";

export class MessageTemplateDto implements IDtoId {
  public id?: number;
  public subject: string;
  public content: string;

  public static createEmpty(): MessageTemplateDto {
    return new MessageTemplateDto({
      subject: "",
      content: "",
    });
  }

  static createWithId(id: number, messageTemplateDto: MessageTemplateDto): MessageTemplateDto {
    const to = new MessageTemplateDto(messageTemplateDto);
    to.id = id;
    return to;
  }

  public constructor(messageTemplate: MessageTemplateDto) {
    this.id = messageTemplate.id;
    this.subject = messageTemplate.subject;
    this.content = messageTemplate.content;
  }
}
