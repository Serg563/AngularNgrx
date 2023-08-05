import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { AppState } from '../appStore/app.store';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private navigate: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      this.navigate.navigate(['/login']);
    }
    return false;
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (
      this.store.select('user').pipe(map((data) => data.user?.role == 'sac'))
    ) {
      return false;
    }
    return true;
  }
  canLoad(route: ActivatedRouteSnapshot) {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      this.navigate.navigate(['/login']);
    }
    return false;
  }
}
