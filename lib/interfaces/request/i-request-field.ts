export interface IRequestField {
  name: string;
  type: typeof Object;
  typeName: string;
  isEquals(field: IRequestField): boolean;
}
