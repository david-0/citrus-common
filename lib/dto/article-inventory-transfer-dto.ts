export class ArticleInventoryTransferDto {

  constructor(public articleStockSenderId: number, public articleStockReceiverId: number, public quantity: number) {
  }
}
