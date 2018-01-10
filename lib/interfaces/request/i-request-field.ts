export interface IRequestField {
  fieldName: string;
  typeName: string;
  isEquals(field: IRequestField): boolean;
}
