import {Repository} from './Repository';
import {BaseResponse} from './BaseResponse';

export class SearchResponse extends BaseResponse {
  items: Array<Repository>;
}
