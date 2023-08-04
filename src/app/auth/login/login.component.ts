import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import apiResponse from 'src/app/models/apiResponse';
import decodedUserModel from 'src/app/models/decodedUserModel';
import userModel from 'src/app/models/userModel';
import jwt_decode from 'jwt-decode';
import { AppState } from 'src/app/appStore/app.store';
import { Store } from '@ngrx/store';
import { setUser } from 'src/app/ngrx/userStore/user.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userName!: string;
  password!: string;
  constructor(
    private auth: AuthService,
    private store: Store<AppState>,
    private navigate: Router
  ) {}
  LoginUser() {
    this.auth
      .Login(this.userName, this.password)
      .subscribe((response: apiResponse) => {
        console.log(response);
        const { token } = response.result;
        const { fullname, id, email, role }: decodedUserModel =
          jwt_decode(token);
        const user: decodedUserModel = {
          fullname: fullname,
          id: id,
          email: email,
          role: role,
        };
        localStorage.setItem('token', token);
        // dispatch(setLoggedIn({ fullname, id, email, role }));
        console.log(user);
        this.store.dispatch(setUser({ user }));
        console.log('good');
        this.navigate.navigate(['/']);
      });
  }
}
