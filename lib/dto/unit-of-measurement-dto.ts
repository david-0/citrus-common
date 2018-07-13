import {ArticleDto} from "./article-dto";
import {DtoId} from "./dto-id";

export class UnitOfMeasurementDto implements DtoId {

  public id?: number;
  public shortcut: string;
  public description: string;
  public articles: ArticleDto[];

  constructor(unitOfMeasurement: UnitOfMeasurementDto) {
    this.id = unitOfMeasurement.id;
    this.shortcut = unitOfMeasurement.shortcut;
    this.description = unitOfMeasurement.description;
    this.articles = unitOfMeasurement.articles;
  }

  public static createEmpty(): UnitOfMeasurementDto {
    return new UnitOfMeasurementDto({
      shortcut: "",
      description: "",
      articles: []
    });
  }

  static createWithId(id: number, unitOfMeasurement: UnitOfMeasurementDto): UnitOfMeasurementDto {
    const to = new UnitOfMeasurementDto(unitOfMeasurement);
    to.id = id;
    return to;
  }
}
