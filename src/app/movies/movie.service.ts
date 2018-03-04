import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Movie } from "./movie.model";

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(genreId: String): Observable<Movie[]> {
    let url = 'https://localhost:5001/api/movies';
    console.log("getMovies, genreId:", genreId);
    if (genreId)
      url = url + "?genreId=" + genreId;

    return this.http.get<Movie[]>(url);
  }
}
