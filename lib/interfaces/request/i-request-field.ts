export interface IRequestField {
  name: string;
  type: typeof Object;
  isEquals(field: IRequestField): boolean;
}
