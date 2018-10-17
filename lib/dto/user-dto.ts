import {AddressDto} from "./address-dto";
import {ArticleCheckInDto} from "./article-check-in-dto";
import {ArticleCheckOutDto} from "./article-check-out-dto";
import {OrderDto} from "./order-dto";
import {DtoId} from "./dto-id";
import {RoleDto} from "./role-dto";

export class UserDto implements  DtoId{

  public id?: number;
  public number: number;
  public email: string;
  public name: string;
  public prename: string;
  public phone: string;
  public mobile: string;
  public addresses?: AddressDto[];
  public customerOrders?: OrderDto[];
  public articleCheckIns?: ArticleCheckInDto[];
  public articleCheckOuts?: ArticleCheckOutDto[];
  public roles?: RoleDto[];

  constructor(userInfo: UserDto) {
    this.id = userInfo.id;
    this.number = userInfo.number;
    this.email = userInfo.email;
    this.name = userInfo.name;
    this.prename = userInfo.prename;
    this.phone = userInfo.phone;
    this.mobile = userInfo.mobile;
    this.addresses = userInfo.addresses;
    this.customerOrders = userInfo.customerOrders;
    this.articleCheckIns = userInfo.articleCheckIns;
    this.articleCheckOuts = userInfo.articleCheckOuts;
    this.roles = userInfo.roles;
  }

  public static createEmpty(): UserDto {
    return new UserDto({
      number: -1,
      email: "",
      name: "",
      prename: "",
      phone: "",
      mobile: "",
      addresses: [],
      customerOrders: [],
      articleCheckIns: [],
      articleCheckOuts: [],
      roles: [],
    });
  }

  static createWithId(id: number, userInfo: UserDto): UserDto {
    const to = new UserDto(userInfo);
    to.id = id;
    return to;
  }
}
