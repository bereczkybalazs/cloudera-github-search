import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchResultsComponent} from './components/search-results/search-results.component';
import {ProjectComponent} from './components/project/project.component';


const routes: Routes = [
  {path: '', component: SearchResultsComponent},
  {path: 'repositories/:owner/:project', component: ProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
