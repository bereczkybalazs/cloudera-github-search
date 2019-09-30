import {Component, OnInit} from '@angular/core';
import {GithubSearchService} from '../../services/github-search/github-search.service';
import {SearchResponse} from '../../models/SearchResponse';
import {Repository} from '../../models/Repository';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  public searchResults: Array<Repository>;
  constructor(private githubSearchService: GithubSearchService) { }

  ngOnInit() {
  }

  onSearch(query) {
    this.githubSearchService.searchByQuery(query).subscribe((res: SearchResponse) => {
      this.searchResults = res.items;
    });
  }
}
