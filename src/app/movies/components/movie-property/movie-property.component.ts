import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-property',
  templateUrl: './movie-property.component.html',
  styleUrl: './movie-property.component.css'
})
export class MoviePropertyComponent {
  @Input("movie") movie: Movie | undefined;
  constructor(private router: Router){}
  ngOnInit(): void {

  }
  navigateToDetails(movieId?: number) {
    if(movieId){
      this.router.navigate(['/movies', movieId]);
    }
  }

}
