import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Movie } from "./movie.model";
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(genreId: String): Observable<Movie[]> {
    let url = 'https://localhost:5001/api/movies';
    if (genreId)
      url = url + "?genreId=" + genreId;

    return this.http.get<Movie[]>(url);
  }

  removeMovie(movieId: string) {
    return this.http.delete('https://localhost:5001/api/movies/'+movieId, {responseType: 'text'})
      .pipe(
        catchError(err => new ErrorObservable(err.message))
      );
  }
}
