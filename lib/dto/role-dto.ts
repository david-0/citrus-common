import {DtoId} from "./dto-id";

export class RoleDto implements DtoId {

  public id?: number;
  public name: string;


  constructor(role: RoleDto) {
    this.id = role.id;
    this.name = role.name;
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
