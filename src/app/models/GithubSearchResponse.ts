import {Repository} from './Repository';

export class GithubSearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: Array<Repository>;
}
