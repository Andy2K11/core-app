import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { User } from './user.model';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private host = environment.host;
  private username: string;
  private level: string;

  constructor(private http: HttpClient, private router: Router) {
    if (Date.now() > +localStorage.getItem('expires')) {
      this.logout();
    } else {
      this.username = localStorage.getItem('username');
      this.level = localStorage.getItem('level');
    }
  }

  logout(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('level');
    localStorage.removeItem('expires');
    this.username = '';
    this.level = '';
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
  login(user: User): Observable<HttpResponse<User>> {
    const url = `//${this.host}/users/login`;
    const body = JSON.stringify(user);
    const headers: HttpHeaders = new HttpHeaders({
        'Content-type': 'application/json',
    });
    return this.http.post<User>(url, body, {
      headers: headers,
      observe: 'response',
      responseType: 'json',
      withCredentials: true
    })
    .pipe<HttpResponse<User>>(
      map(data => {
        this.username = data.body.username;
        this.level = data.body.level;
        localStorage.setItem('username', data.body.username);
        localStorage.setItem('level', data.body.level);
        localStorage.setItem('expires', data.body.expires + '');
        this.router.navigate(['/']);
      }),
      catchError(this.handleError)
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

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      return throwError('Network error, please check your connection');
    }

    if (error.status === 401) {
      return throwError('Check your username and password');
    }
    // return an observable with a user-facing error message
    console.error('An error occurred:', error.error.message);
    return throwError('Server error, please try again later');
  }
}
