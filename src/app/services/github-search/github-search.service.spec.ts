import { TestBed } from '@angular/core/testing';

import { GithubSearchService } from './github-search.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('GithubSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    const service: GithubSearchService = TestBed.get(GithubSearchService);
    expect(service).toBeTruthy();
  });
});
