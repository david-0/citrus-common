import {ArticleStockDto} from "./article-stock-dto";
import {DtoId} from "./dto-id";
import {UnitOfMeasurementDto} from "./unit-of-measurement-dto";

export class ArticleDto implements DtoId {

  public id?: number;
  public number: number;
  public description: string;
  public imageId: string;
  public price: number;
  public inSale: boolean;
  public unitOfMeasurement?: UnitOfMeasurementDto;
  public articleStocks?: ArticleStockDto[];

  constructor(article: ArticleDto) {
    this.id = article.id;
    this.number = article.number;
    this.description = article.description;
    this.imageId = article.imageId;
    this.price = article.price;
    this.inSale = article.inSale;
    this.unitOfMeasurement = article.unitOfMeasurement;
    this.articleStocks = article.articleStocks;
  }

  public static createEmpty(): ArticleDto {
    return new ArticleDto({
      number: 0,
      description: "",
      imageId: "",
      price: 0,
      inSale: false,
      articleStocks: [],
      unitOfMeasurement: UnitOfMeasurementDto.createEmpty(),
    });
  }

  static createWithId(id: number, article: ArticleDto): ArticleDto {
    const to = new ArticleDto(article);
    to.id = id;
    return to;
  }
}
