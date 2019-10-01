import {Component, Input, OnInit} from '@angular/core';
import {Issue} from '../../models/Issue';

@Component({
  selector: 'app-issue-item',
  templateUrl: './issue-item.component.html',
  styleUrls: ['./issue-item.component.scss']
})
export class IssueItemComponent implements OnInit {

  @Input() issue: Issue = {
    body: '',
    title: '',
    user: {
      login: ''
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
