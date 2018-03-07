import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Genre } from './genre.model';

import 'rxjs/add/observable/throw';

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

    return req;
  }

  removeGenre(genre: Genre): Observable<void> {
    if (!genre.id)
      return Observable.throw({ message: "Invalid request! Cannot delete unsaved genre!" });
    
    return this.http.delete<void>(`${this.genresUrl}/${genre.id}`);
  }
}
