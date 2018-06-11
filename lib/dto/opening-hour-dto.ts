import {DtoId} from "../dto/dto-id";
import {PickupLocationDto} from "./pickup-location-dto";

export class OpeningHourDto implements DtoId {

  public id?: number;
  public fromDate: Date;
  public toDate: Date;
  public pickupLocationId?: number;

  constructor(openingHour: OpeningHourDto) {
    this.id = openingHour.id;
    this.fromDate = openingHour.fromDate;
    this.toDate = openingHour.toDate;
    this.pickupLocationId = openingHour.pickupLocationId;
  }

  public static createEmpty(pickupLocation: PickupLocationDto): OpeningHourDto {
    return new OpeningHourDto({
      fromDate: new Date(),
      toDate: new Date(),
      pickupLocationId: pickupLocation.id,
    });
  }

  static createWithId(id: number, openingHour: OpeningHourDto): OpeningHourDto {
    const to = new OpeningHourDto(openingHour);
    to.id = id;
    return to;
  }
}
