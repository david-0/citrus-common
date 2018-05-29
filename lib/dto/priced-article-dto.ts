import {DtoId} from "../dto/dto-id";
import {ArticleDto} from "./article-dto";

export class PricedArticleDto implements DtoId{

  public id?: number;
  public articleId?: number;
  public article: ArticleDto;
  public price: number;
  public validFrom: Date;
  public validTo: Date;
  public customOrderItemIds: number[];

  constructor(pricedArticle: PricedArticleDto) {
    this.id = pricedArticle.id;
    this.articleId = pricedArticle.articleId;
    this.article = pricedArticle.article;
    this.price = pricedArticle.price;
    this.validFrom = pricedArticle.validFrom;
    this.validTo = pricedArticle.validTo;
    this.customOrderItemIds = pricedArticle.customOrderItemIds;
  }

  public static createEmpty(article: ArticleDto): PricedArticleDto {
    return new PricedArticleDto({
      articleId: article.id,
      article: article,
      price: 0,
      validFrom: new Date('1970-01-01T00:00:00'),
      validTo: new Date('2999-31-12T23:59:59'),
      customOrderItemIds: [],
    });
  }

  static createWithId(id: number, pricedArticle: PricedArticleDto): PricedArticleDto {
    const to = new PricedArticleDto(pricedArticle);
    to.id = id;
    return to;
  }
}
