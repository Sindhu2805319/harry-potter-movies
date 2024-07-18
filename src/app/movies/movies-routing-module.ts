import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieFilterComponent } from './components/movie-filter/movie-filter.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
    {
      path: 'movies',
      component: MovieFilterComponent
    },
    {
      path: '',
      redirectTo: 'movies',
      pathMatch: 'full'
    },
    {
      path: 'movies/:id',
      component: MovieDetailsComponent
    }
  ];

@NgModule({
    declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }