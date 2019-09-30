import {Component, Input, OnInit} from '@angular/core';
import {Repository} from '../../models/Repository';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss']
})
export class SearchResultItemComponent implements OnInit {

  @Input() repository: Repository;

  constructor() { }

  ngOnInit() {
  }

}
