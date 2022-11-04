import {ArticleStockDto} from "./article-stock-dto";
import {IDtoId} from "./i-dto-id";
import {UnitOfMeasurementDto} from "./unit-of-measurement-dto";

export class ArticleDto implements IDtoId {

  public id?: number;
  public number: number;
  public description: string;
  public imageId: string;
  public price: number;
  public inSale: boolean;
  public saleUnit: number;
  public unitOfMeasurement?: UnitOfMeasurementDto;
  public articleStocks?: ArticleStockDto[];

  public static createEmpty(): ArticleDto {
    return new ArticleDto({
      number: 0,
      description: "",
      imageId: "",
      price: 0,
      inSale: false,
      saleUnit: 1,
      articleStocks: [],
      unitOfMeasurement: UnitOfMeasurementDto.createEmpty(),
    });
  }

  static createWithId(id: number, article: ArticleDto): ArticleDto {
    const to = new ArticleDto(article);
    to.id = id;
    return to;
  }

  constructor(article: ArticleDto) {
    this.id = article.id;
    this.number = article.number;
    this.description = article.description;
    this.imageId = article.imageId;
    this.price = article.price;
    this.inSale = article.inSale;
    this.saleUnit = article.saleUnit;
    this.unitOfMeasurement = article.unitOfMeasurement;
    this.articleStocks = article.articleStocks;
  }
}
