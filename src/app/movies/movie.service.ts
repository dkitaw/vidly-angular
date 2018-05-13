import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Movie, MovieWriteModel } from "./movie.model";
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(genreId: string): Observable<Movie[]> {
    let url = 'https://localhost:5001/api/movies';
    if (genreId)
      url = url + "?genreId=" + genreId;

    return this.http.get<Movie[]>(url);
  }

  saveMovie(movie: Movie): Observable<Movie> {
    const data: MovieWriteModel = {
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };

    const req = movie._id ?
      this.http.put<Movie>('https://localhost:5001/api/movies/' + movie._id, data) :
      this.http.post<Movie>('https://localhost:5001/api/movies', data);

    return req.pipe(
      catchError(err => new ErrorObservable(err.message))
    );
  }

  removeMovie(movieId: string) {
    return this.http.delete('https://localhost:5001/api/movies/' + movieId, { responseType: 'text' })
      .pipe(
        catchError(err => new ErrorObservable(err.message))
      );
  }
}
