import {Component, OnInit} from '@angular/core';
import {GithubSearchService} from '../../services/github-search/github-search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  public items: [];
  constructor(private githubSearchService: GithubSearchService) { }

  ngOnInit() {
  }

  onSearch(query) {
    this.githubSearchService.searchByQuery(query).subscribe(res => {
      console.log(res);
    });
  }
}
