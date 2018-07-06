import {DtoId} from "./dto-id";
import {UserInfoDto} from "./user-info-dto";

export class RoleDto implements DtoId {

  public id?: number;
  public name: number;


  constructor(role: RoleDto) {
    this.id = role.id;
    this.userId = role.userId;
    this.user = role.user;
  }

  public static createEmpty(): RoleDto {
    return new RoleDto({
      userId: "",
      description: "",
      articleIds: []
    });
  }

  static createWithId(id: number, role: RoleDto): RoleDto {
    const to = new RoleDto(role);
    to.id = id;
    return to;
  }
}
