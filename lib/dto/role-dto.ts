import {IDtoId} from "./dto-id";
import {UserDto} from "./user-dto";

export class RoleDto implements IDtoId {

  public id?: number;
  public name: string;
  public users?: UserDto[];

  public static createEmpty(): RoleDto {
    return new RoleDto({
      name: ""
    });
  }

  static createWithId(id: number, role: RoleDto): RoleDto {
    const to = new RoleDto(role);
    to.id = id;
    return to;
  }

  constructor(role: RoleDto) {
    this.id = role.id;
    this.name = role.name;
    this.users = role.users;
  }

}
