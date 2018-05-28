import {DtoId} from "./dto-id";

export class UnitOfMeasurementDto implements DtoId {

  public id?: number;
  public shortcut: string;
  public description: string;
  public articleIds: number[];

  constructor(unitOfMeasurement: UnitOfMeasurementDto) {
    this.id = unitOfMeasurement.id;
    this.shortcut = unitOfMeasurement.shortcut;
    this.description = unitOfMeasurement.description;
    this.articleIds = unitOfMeasurement.articleIds;
  }

  public static createEmpty(): UnitOfMeasurementDto {
    return new UnitOfMeasurementDto({
      shortcut: "",
      description: "",
      articleIds: []
    });
  }

  static createWithId(id: number, unitOfMeasurement: UnitOfMeasurementDto): UnitOfMeasurementDto {
    const to = new UnitOfMeasurementDto(unitOfMeasurement);
    to.id = id;
    return to;
  }
}
