import {DtoId} from "../dto/dto-id";
import {ArticleStockDto} from "./article-stock-dto";
import {UnitOfMeasurementDto} from "./unit-of-measurement-dto";

export class ArticleDto implements DtoId {

  public id?: number;
  public number: number;
  public description: string;
  public pictureId: string;
  public price: number;
  public inSale: boolean;
  public unitOfMeasurement?: UnitOfMeasurementDto;
  public articleStocks?: ArticleStockDto[];

  constructor(article: ArticleDto) {
    this.id = article.id;
    this.number = article.number;
    this.description = article.description;
    this.pictureId = article.pictureId;
    this.price = article.price;
    this.inSale = article.inSale;
    this.unitOfMeasurement = article.unitOfMeasurement;
    this.articleStocks = article.articleStocks;
  }

  public static createEmpty(): ArticleDto {
    return new ArticleDto({
      number: 0,
      description: "",
      pictureId: "",
      price: 0,
      inSale: false,
      articleStocks: [],
    });
  }

  static createWithId(id: number, article: ArticleDto): ArticleDto {
    const to = new ArticleDto(article);
    to.id = id;
    return to;
  }
}
