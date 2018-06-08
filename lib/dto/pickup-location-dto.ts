import {AddressDto} from "./address-dto";
import {ArticleDto} from "./article-dto";
import {DtoId} from "./dto-id";
import {OpeningHourDto} from "./opening-hour-dto";

export class PickupLocationDto implements DtoId {

  public id?: number;
  public description: string;
  public addressId?: number;
  public address?: AddressDto;
  public availableArticles?: ArticleDto[];
  public openingHours?: OpeningHourDto[];

  constructor(pickupLocation: PickupLocationDto) {
    this.id = pickupLocation.id;
    this.description = pickupLocation.description;
    this.addressId = pickupLocation.addressId;
    this.address = pickupLocation.address;
    this.availableArticles = pickupLocation.availableArticles;
    this.openingHours = pickupLocation.openingHours;
  }

  public static createEmpty(): PickupLocationDto {
    return new PickupLocationDto({
      description: "",
      address: AddressDto.createEmpty(),
      availableArticles: [],
      openingHours: []
    });
  }

  static createWithId(id: number, pickupLocation: PickupLocationDto): PickupLocationDto {
    const to = new PickupLocationDto(pickupLocation);
    to.id = id;
    return to;
  }
}
