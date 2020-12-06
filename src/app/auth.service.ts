import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// Local url
// private surveysUrl = 'http://localhost:3000/api/';
// Heroku url
private surveysUrl = 'https://comp229-curvey-project.herokuapp.com/api/';
  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{token: string}>(this.surveysUrl+'users/signIn', {username: username, password: password})
        .pipe(
            map(result => {
              console.log(result);
              localStorage.setItem('access_token', result.token);
              return true;
            })
        );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}
