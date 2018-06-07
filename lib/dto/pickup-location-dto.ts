import {AddressDto} from "./address-dto";
import {DtoId} from "./dto-id";

export class PickupLocationDto implements DtoId {

  public id?: number;
  public description: string;
  public addressId?: number;
  public address?: AddressDto;
  public availableArticleIds: number[];
  public openingHourIds: number[];

  constructor(pickupLocation: PickupLocationDto) {
    this.id = pickupLocation.id;
    this.description = pickupLocation.description;
    this.addressId = pickupLocation.addressId;
    this.address = pickupLocation.address;
    this.availableArticleIds = pickupLocation.availableArticleIds;
    this.openingHourIds = pickupLocation.openingHourIds;
  }

  public static createEmpty(): PickupLocationDto {
    return new PickupLocationDto({
      description: "",
      availableArticleIds: [],
      openingHourIds: []
    });
  }

  static createWithId(id: number, pickupLocation: PickupLocationDto): PickupLocationDto {
    const to = new PickupLocationDto(pickupLocation);
    to.id = id;
    return to;
  }
}
