import { CommonModule } from '@angular/common';
import { MoviePropertyComponent } from './components/movie-property/movie-property.component';
import { MoviesRoutingModule } from './movies-routing-module';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './services/movie.service';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { FormsModule } from '@angular/forms';
import { MovieFilterComponent } from './components/movie-filter/movie-filter.component';
import { BudgetPipe } from '../shared/budget.pipe';
import { DurationPipe } from '../shared/duration.pipe';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [MoviePropertyComponent, MovieDetailsComponent, MovieFilterComponent, DurationPipe, BudgetPipe],
    providers: [MovieService],
    imports: [
        CommonModule, MoviesRoutingModule, HttpClientModule, FormsModule
    ]
})
export class MoviesModule { }