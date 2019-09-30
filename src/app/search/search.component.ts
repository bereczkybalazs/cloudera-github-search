import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchQuery: string;
  constructor() { }

  ngOnInit() {
  }

  onSearchInputChange(query) {
    this.searchQuery = query;
  }

  onSearch() {
    console.log(this.searchQuery);
  }

}
