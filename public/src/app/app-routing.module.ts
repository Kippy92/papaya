import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { ReviewComponent } from './review/review.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
  { path: '', component: ListComponent  },
  { path: 'movies', component: ListComponent  },
  { path: 'movie/new', component: NewComponent},
  { path: 'review/:id', component: ReviewComponent},
  { path: 'movie/:id', component: SingleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }