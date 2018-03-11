import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthParams } from "./auth-params.model";

import { Observable } from 'rxjs/Observable';
import { catchError, tap, map } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  private storeAuthToken(token) {
    localStorage.setItem('auth_token', token);
  }

  public removeAuthToken() {
    localStorage.removeItem('auth_token');
  }

  get isAuthenticated() {
    return !!this.getToken();
  }

  public getToken() {
    return localStorage.getItem('auth_token');
  }

  login(params: AuthParams): Observable<string> {
    return this.http.post("https://localhost:5001/api/auth", params, {responseType: 'text'})
      .pipe(
        tap(this.storeAuthToken),
        map(x => null),
        catchError(err => new ErrorObservable(err.message))
      );
  }
}
