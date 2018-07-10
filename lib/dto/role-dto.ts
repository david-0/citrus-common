import {DtoId} from "./dto-id";
import {UserInfoDto} from "./user-info-dto";

export class RoleDto implements DtoId {

  public id?: number;
  public name: string;
  public users?: UserInfoDto;

  constructor(role: RoleDto) {
    this.id = role.id;
    this.name = role.name;
    this.users = role.users;
  }

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
}
