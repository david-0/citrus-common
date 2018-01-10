import {IOrderDefinition} from "./i-order-definition";
import {IRequestCondition} from "./i-request-condition";
import {IRequestField} from "./i-request-field";

export interface IRequest {
  typeName: string;
  includedFields?: IRequestField[];
  conditions?: IRequestCondition[];
  order?: IOrderDefinition[];
  limit?: number;
  offset?: number;

  hasCondition(): boolean;

  hasCondition(request: IRequestField): boolean;
}
