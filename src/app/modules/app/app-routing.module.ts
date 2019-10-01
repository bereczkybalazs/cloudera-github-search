import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchResultsComponent} from '../../containers/search-results/search-results.component';
import {IssuesComponent} from '../../containers/issues/issues.component';


const routes: Routes = [
  {path: '', component: SearchResultsComponent},
  {path: 'repositories/:owner/:project', component: IssuesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
