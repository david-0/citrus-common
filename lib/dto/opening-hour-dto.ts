import {DtoId} from "../dto/dto-id";
import {LocationDto} from "./location-dto";

export class OpeningHourDto implements DtoId {

  public id?: number;
  public fromDate: Date;
  public toDate: Date;
  public location?: LocationDto;

  constructor(openingHour: OpeningHourDto) {
    this.id = openingHour.id;
    this.fromDate = openingHour.fromDate;
    this.toDate = openingHour.toDate;
    this.location = openingHour.location;
  }

  public static createEmpty(): OpeningHourDto {
    return new OpeningHourDto({
      fromDate: new Date(),
      toDate: new Date(),
      location: LocationDto.createEmpty(),
    });
  }

  static createWithId(id: number, openingHour: OpeningHourDto): OpeningHourDto {
    const to = new OpeningHourDto(openingHour);
    to.id = id;
    return to;
  }
}
