import { Component } from '@angular/core';
import { MovieDetails } from '../../models/movie-details';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  movie: MovieDetails | undefined;
  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService){
    
  }
  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id') || '';
    this.movieService.getMovieDetails(movieId).subscribe(movie => {
      this.movie = movie;
    });
  }
  backToHomePage(): void{
    this.router.navigate(['/movies']);
  }
}
