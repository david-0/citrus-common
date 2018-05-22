export class AddressDto{

  public id: number;
  public userId: number;
  public description: string;
  public name: string;
  public prename: string;
  public street: string;
  public number: string;
  public addition: string;
  public zipcode: string;
  public city: string;
  public gpsLocationId: number;

  constructor(address: AddressDto) {
    this.id = address.id;
    this.userId = address.userId;
    this.description = address.description;
    this.name = address.name;
    this.prename = address.prename;
    this.street = address.street;
    this.number = address.number;
    this.addition = address.addition;
    this.zipcode = address.zipcode;
    this.city = address.city;
    this.gpsLocationId = address.gpsLocationId;
  }

  public static createEmpty(): AddressDto {
    return new AddressDto({
      id: -1,
      userId: -1,
      description: "",
      name: "",
      prename: "",
      street: "",
      number: "",
      addition: "",
      zipcode: "",
      city: "",
      gpsLocationId: -1
    });
  }

  static createAddressWithId(id: number, address: AddressDto): AddressDto {
    const to = new AddressDto(address);
    to.id = id;
    return to;
  }
}
