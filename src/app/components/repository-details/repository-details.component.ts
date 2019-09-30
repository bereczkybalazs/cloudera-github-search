import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {log} from 'util';

@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.scss']
})
export class RepositoryDetailsComponent implements OnInit {

  owner: string;
  project: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.owner = this.route.snapshot.paramMap.get('owner');
    this.project = this.route.snapshot.paramMap.get('project');
  }

}
