import {AddressDto} from "./address-dto";
import {ArticleCheckInDto} from "./article-check-in-dto";
import {ArticleCheckOutDto} from "./article-check-out-dto";
import {IDtoId} from "./dto-id";
import {OrderDto} from "./order-dto";
import {RoleDto} from "./role-dto";

export class UserDto implements IDtoId {

  public id?: number;
  public email: string;
  public name: string;
  public prename: string;
  public phone: string;
  public addresses?: AddressDto[];
  public orders?: OrderDto[];
  public ordersCheckingOutUser?: OrderDto[];
  public articleCheckIns?: ArticleCheckInDto[];
  public articleCheckOuts?: ArticleCheckOutDto[];
  public roles?: RoleDto[];

  public static createEmpty(): UserDto {
    return new UserDto({
      email: "",
      name: "",
      prename: "",
      phone: "",
      addresses: [],
      orders: [],
      ordersCheckingOutUser: [],
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

  constructor(userInfo: UserDto) {
    this.id = userInfo.id;
    this.email = userInfo.email;
    this.name = userInfo.name;
    this.prename = userInfo.prename;
    this.phone = userInfo.phone;
    this.addresses = userInfo.addresses;
    this.orders = userInfo.orders;
    this.ordersCheckingOutUser = userInfo.ordersCheckingOutUser;
    this.articleCheckIns = userInfo.articleCheckIns;
    this.articleCheckOuts = userInfo.articleCheckOuts;
    this.roles = userInfo.roles;
  }
}
