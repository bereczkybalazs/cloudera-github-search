import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  private readonly apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://api.github.com/search/repositories?q=';
  }

  searchByQuery(query: string) {
    return this.http.get(this.apiUrl + query);
  }
}
