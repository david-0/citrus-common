import {IOrderDefinition} from "./i-order-definition";
import {IRequestCondition} from "./i-request-condition";
import {IRequestField} from "./i-request-field";

export interface IRequest<T> {
  type: typeof Object;
  includedFields?: IRequestField[];
  conditions?: IRequestCondition<T>[];
  order?: IOrderDefinition[];
  limit?: number;
  offset?: number;
}
