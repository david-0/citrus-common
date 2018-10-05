import {DtoId} from "../dto/dto-id";
import {UserDto} from "./user-dto";

export class AddressDto implements DtoId{

  public id?: number;
  public user?: UserDto;
  public description: string;
  public name: string;
  public prename: string;
  public street: string;
  public number: string;
  public addition: string;
  public zipcode: string;
  public city: string;

  constructor(address: AddressDto) {
    this.id = address.id;
    this.user = address.user;
    this.description = address.description;
    this.name = address.name;
    this.prename = address.prename;
    this.street = address.street;
    this.number = address.number;
    this.addition = address.addition;
    this.zipcode = address.zipcode;
    this.city = address.city;
  }

  public static createEmpty(): AddressDto {
    return new AddressDto({
      user: UserDto.createEmpty(),
      description: "",
      name: "",
      prename: "",
      street: "",
      number: "",
      addition: "",
      zipcode: "",
      city: "",
    });
  }

  static createWithId(id: number, address: AddressDto): AddressDto {
    const to = new AddressDto(address);
    to.id = id;
    return to;
  }
}
