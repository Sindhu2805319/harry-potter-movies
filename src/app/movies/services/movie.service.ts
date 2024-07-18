import { Injectable } from '@angular/core';
import { MovieDetails } from '../models/movie-details';
import { Observable } from 'rxjs/internal/Observable';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = '/movies';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  getMovieDetails(id: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(this.apiUrl + "/" + id);
  }
}
