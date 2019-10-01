import {Component, Input, OnInit} from '@angular/core';
import {Repository} from '../../models/Repository';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss']
})
export class SearchResultItemComponent implements OnInit {

  @Input() repository: Repository = {
    archived: false,
    description: '',
    disabled: false,
    forks_count: 0,
    html_url: '',
    id: 0,
    open_issues_count: 0,
    stargazers_count: 0,
    watchers_count: 0,
    full_name: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
