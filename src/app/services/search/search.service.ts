import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SearchServiceInterface} from './search.service.interface';

@Injectable({
  providedIn: 'root'
})

export abstract class SearchService implements SearchServiceInterface {

  protected apiUrl: string;

  protected constructor(protected http: HttpClient) {}

  public searchByQuery(query: string) {
    return this.http.get(this.apiUrl + query);
  }
}
