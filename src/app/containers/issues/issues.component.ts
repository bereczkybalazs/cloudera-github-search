import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Issue} from '../../models/Issue';
import {GithubIssueSearchService} from '../../services/github-issue-search/github-issue-search.service';
import {IssueResponse} from '../../models/IssueResponse';

@Component({
  selector: 'app-repository-details',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {

  owner: string;
  project: string;
  issues: Array<Issue>;

  constructor(
    private route: ActivatedRoute,
    private issueSearch: GithubIssueSearchService
  ) { }

  ngOnInit() {
    this.owner = this.route.snapshot.paramMap.get('owner');
    this.project = this.route.snapshot.paramMap.get('project');
    const searchQuery = `${this.owner}/${this.project}`;
    this.issueSearch.searchByQuery(searchQuery).subscribe((res: IssueResponse) => {
      this.issues = res.items;
    });
  }

}
