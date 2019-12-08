export class MessageDto {
  constructor(public subject: string, public message: string, public receiverUserIds: number[]) {
  }
}
