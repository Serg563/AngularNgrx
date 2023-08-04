import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import apiResponse from 'src/app/models/apiResponse';
import userModel from 'src/app/models/userModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  Register(user: userModel) {
    const body: userModel = {
      userName: user.userName,
      name: user.name,
      password: user.password,
      role: user.role,
    };
    return this.http.post('http://localhost:5080/api/Auth/register', body);
  }
  Login(userName: string, password: string): Observable<apiResponse> {
    const login = {
      userName: userName,
      password: password,
    };
    return this.http.post<apiResponse>(
      'http://localhost:5080/api/Auth/login',
      login
    );
  }
}
