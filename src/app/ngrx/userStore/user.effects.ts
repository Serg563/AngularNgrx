import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import { AuthService } from 'src/app/Services/Auth/auth.service';
import { loginStart, loginSuccess, setUser } from './user.action';
import { exhaustMap, map } from 'rxjs';
import decodedUserModel from 'src/app/models/decodedUserModel';
import { AppState } from 'src/app/appStore/app.store';
import jwt_decode from 'jwt-decode';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.Login(action.userName, action.password).pipe(
          map((data) => {
            console.log(data);
            const { token } = data.result;
            const { fullname, id, email, role }: decodedUserModel =
              jwt_decode(token);
            const user: decodedUserModel = {
              fullname: fullname,
              id: id,
              email: email,
              role: role,
            };
            localStorage.setItem('token', token);
            console.log('User Successfully added');
            return setUser({ user });
          })
        );
      })
    );
  });
}
