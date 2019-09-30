import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchResultsComponent} from '../search-results/search-results.component';
import {RepositoryDetailsComponent} from '../repository-details/repository-details.component';


const routes: Routes = [
  {path: '', component: SearchResultsComponent},
  {path: 'repositories/:owner/:project', component: RepositoryDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
