import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Genre } from './genre.model';

import { catchError} from 'rxjs/operators/catchError';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class GenreService {

  private genresUrl = 'https://localhost:5001/api/genres';

  constructor(private http: HttpClient) { }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.genresUrl);
  }

  saveGenre(genre: Genre): Observable<Genre> {
    const req =
      genre.id ?
        this.http.put<Genre>(`${this.genresUrl}/${genre.id}`, genre):
        this.http.post<Genre>(this.genresUrl, genre);

    return req.pipe(
      catchError(err => new ErrorObservable(err.message))
    );
;
  }

  removeGenre(genre: Genre): Observable<void> {
    if (!genre.id)
      return new ErrorObservable("Invalid request! Cannot delete unsaved genre!");

    return this.http.delete<void>(`${this.genresUrl}/${genre.id}`)
      .pipe(
          catchError(err => new ErrorObservable(err.message))
      );
  }
}
