import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from '../../components/search/search.component';
import { SearchResultsComponent } from '../../containers/search-results/search-results.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchResultItemComponent } from '../../components/search-result-item/search-result-item.component';
import { IssuesComponent } from '../../containers/issues/issues.component';
import {IssueItemComponent} from '../../components/issue-item/issue-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultsComponent,
    SearchResultItemComponent,
    IssuesComponent,
    IssueItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
