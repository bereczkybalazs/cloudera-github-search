import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SearchService} from '../search/search.service';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService extends SearchService {

  constructor(protected http: HttpClient) {
    super(http);
    this.apiUrl = 'https://api.github.com/search/repositories?q=';
  }
}
