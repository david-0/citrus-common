import {DtoId} from "../dto/dto-id";
import {EArticleStatus} from "../entity/e-article-status";
import {UnitOfMeasurementDto} from "./unit-of-measurement-dto";

export class ArticleDto implements DtoId {

  public id?: number;
  public number: number;
  public description: string;
  public price: number;
  public stock: number;
  public unitOfMeasurementId?: number;
  public unitOfMeasurement?: UnitOfMeasurementDto;
  public status: EArticleStatus;
  public vendorOrderItemIds: number[];
  public pickupLocationIds: number[];

  constructor(article: ArticleDto) {
    this.id = article.id;
    this.number = article.number;
    this.description = article.description;
    this.price = article.price;
    this.stock = article.stock;
    this.unitOfMeasurementId = article.unitOfMeasurementId;
    this.unitOfMeasurement = article.unitOfMeasurement;
    this.status = article.status;
    this.vendorOrderItemIds = article.vendorOrderItemIds;
    this.pickupLocationIds = article.pickupLocationIds;
  }

  public static createEmpty(): ArticleDto {
    return new ArticleDto({
      number: 0,
      description: "",
      price: 0,
      stock: 0,
      status: EArticleStatus.created,
      vendorOrderItemIds: [],
      pickupLocationIds: [],
    });
  }

  static createWithId(id: number, address: ArticleDto): ArticleDto {
    const to = new ArticleDto(address);
    to.id = id;
    return to;
  }
}
