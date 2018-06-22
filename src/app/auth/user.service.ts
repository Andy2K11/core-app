import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { User } from './user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private host = environment.host;
  private username: string;
  private level: string;

  constructor(private http: HttpClient) {
    this.username = localStorage.getItem('username');
    this.level = localStorage.getItem('level');
    console.log('from local storage: ' + this.username);
   }

  register(user: User): Observable<HttpResponse<User>> {
    const url = `//${this.host}/users/register`;
    const body = JSON.stringify(user);
    const headers: HttpHeaders = new HttpHeaders({
        'Content-type': 'application/json',
    });
    return this.http.post<User>(url, body, {
        headers: headers,
        observe: 'response',
        responseType: 'json',
        withCredentials: true
    });
}
  /*
   * Observable<HttpResponse<User>>
   */
  login(user: User): void {
    const url = `//${this.host}/users/login`;
    const body = JSON.stringify(user);
    const headers: HttpHeaders = new HttpHeaders({
        'Content-type': 'application/json',
    });
    this.http.post<User>(url, body, {
        headers: headers,
        observe: 'response',
        responseType: 'json',
        withCredentials: true
    }).subscribe(
      data => {
          this.username = data.body.username;
          this.level = data.body.level;
          localStorage.setItem('username', data.body.username);
          localStorage.setItem('level', data.body.level);
      },
      error => console.error(error)
    );
  }

  isLoggedIn(): boolean {
    return (this.username !== undefined && (this.level === 'guest' || this.level === 'admin'));
  }

  getUsername(): string {
    return this.username;
  }

  isAdmin(): boolean {
    return this.level === 'admin';
  }
}
