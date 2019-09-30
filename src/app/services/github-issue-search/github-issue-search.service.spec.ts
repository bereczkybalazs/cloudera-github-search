import { TestBed } from '@angular/core/testing';

import { GithubIssueSearchService } from './github-issue-search.service';

describe('GithubIssueSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubIssueSearchService = TestBed.get(GithubIssueSearchService);
    expect(service).toBeTruthy();
  });
});
