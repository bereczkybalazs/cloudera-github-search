import {BaseResponse} from './BaseResponse';
import {Issue} from './Issue';

export class IssueResponse extends BaseResponse {
  items: Array<Issue>;
}
