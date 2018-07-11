import {AddressDto} from "./address-dto";
import {CustomerOrderDto} from "./customer-order-dto";
import {DtoId} from "./dto-id";
import {RoleDto} from "./role-dto";

export class UserInfoDto implements  DtoId{

  public id?: number;
  public number: number;
  public email: string;
  public name: string;
  public prename: string;
  public phone: string;
  public mobile: string;
  public addresses?: AddressDto[];
  public customerOrders?: CustomerOrderDto[];
  public roles?: RoleDto[];

  constructor(userInfo: UserInfoDto) {
    this.id = userInfo.id;
    this.number = userInfo.number;
    this.email = userInfo.email;
    this.name = userInfo.name;
    this.prename = userInfo.prename;
    this.phone = userInfo.phone;
    this.mobile = userInfo.mobile;
    this.addresses = userInfo.addresses;
    this.customerOrders = userInfo.customerOrders;
    this.roles = userInfo.roles;
  }

  public static createEmpty(): UserInfoDto {
    return new UserInfoDto({
      number: -1,
      email: "",
      name: "",
      prename: "",
      phone: "",
      mobile: "",
      addresses: [],
      customerOrders: [],
      roles: [],
    });
  }

  static createWithId(id: number, userInfo: UserInfoDto): UserInfoDto {
    const to = new UserInfoDto(userInfo);
    to.id = id;
    return to;
  }
}
