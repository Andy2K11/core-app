import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResource } from './iresource';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private host = environment.host;

  constructor(private http: HttpClient) { }

  getResources(): Observable<IResource[]> {
    const url = `//${this.host}/resources`;
    return this.http.get<IResource[]>(url);
  }
}
