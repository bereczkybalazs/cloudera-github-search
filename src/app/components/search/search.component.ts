import { Component, OnInit } from '@angular/core';
import {GithubSearchService} from '../../services/github-search/github-search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchQuery: string;
  constructor(private githubSearchService: GithubSearchService) { }

  ngOnInit() {
  }

  onSearchInputChange(query) {
    this.searchQuery = query;
  }

  onSearch() {
    console.log(this.searchQuery);
    this.githubSearchService.searchByQuery(this.searchQuery).subscribe(res => {
      console.log(res);
    });
  }

}
