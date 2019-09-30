import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from '../search/search.component';
import { SearchResultsComponent } from '../search-results/search-results.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchResultItemComponent } from '../search-result-item/search-result-item.component';
import { RepositoryDetailsComponent } from '../repository-details/repository-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultsComponent,
    SearchResultItemComponent,
    RepositoryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
