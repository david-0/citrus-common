import {IOrderDefinition} from "citrus-common";
import {CModel} from "../model/c/c-model";
import {IRequestCondition} from "./condition/i-request-condition";
import {IRequestField} from "./i-request-field";

export interface IRequest<T> {
  type: typeof CModel | typeof Object;
  includedFields?: IRequestField[];
  conditions?: IRequestCondition<T>[];
  order?: IOrderDefinition[];
  limit?: number;
  offset?: number;
}
