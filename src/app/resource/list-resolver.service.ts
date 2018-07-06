import { Injectable } from '@angular/core';
import { IResource } from './iresource';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ResourceService } from './resource.service';
import { Observable, pipe } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ListResolver implements Resolve<IResource[]> {

  constructor(private resourceService: ResourceService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IResource[]> {
    return this.resourceService.getResources().pipe<IResource[]>(
      catchError(error => {
        console.error(error);
        return null;
      })
    );
  }
}
