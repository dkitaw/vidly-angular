import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Genre } from './genre.model';

@Injectable()
export class GenreService {

  private genresUrl = 'https://localhost:5001/api/genres';

  constructor(private http: HttpClient) { }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.genresUrl);
  }
}
