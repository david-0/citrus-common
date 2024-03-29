import {IDtoId} from "./i-dto-id";
import {OrderDto} from "./order-dto";
import {RoleDto} from "./role-dto";

export class UserDto implements IDtoId {

  public id?: number;
  public email: string;
  public name: string;
  public prename: string;
  public phone: string;
  public orders?: OrderDto[];
  public ordersCheckingOutUser?: OrderDto[];
  public roles?: RoleDto[];

  public static createEmpty(): UserDto {
    return new UserDto({
      email: "",
      name: "",
      prename: "",
      phone: "",
      orders: [],
      ordersCheckingOutUser: [],
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
    this.orders = userInfo.orders;
    this.ordersCheckingOutUser = userInfo.ordersCheckingOutUser;
    this.roles = userInfo.roles;
  }
}
