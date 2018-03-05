import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthParams } from "./auth-params.model";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of'

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
    return !!localStorage.getItem('auth_token');
  }

  login(params: AuthParams): Observable<string> {
    return this.http.post("https://localhost:5001/api/auth", params, {responseType: 'text'})
      .do(this.storeAuthToken)
      .map(x => null)
      .catch(err => Observable.of(err.error))
      ;
  }
}
