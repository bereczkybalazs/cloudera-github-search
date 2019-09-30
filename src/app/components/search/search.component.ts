import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  searchInput: string;

  constructor() { }

  ngOnInit() {
  }

  onInputChange(e) {
    this.searchInput = e.target.value;
    if (e.which === 13) {
      this.submitSearch();
    }
  }

  submitSearch() {
    this.search.emit(this.searchInput);
  }
}
