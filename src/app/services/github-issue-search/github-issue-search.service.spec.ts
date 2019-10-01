import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { GithubIssueSearchService } from './github-issue-search.service';

describe('GithubIssueSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    const service: GithubIssueSearchService = TestBed.get(GithubIssueSearchService);
    expect(service).toBeTruthy();
  });
});
