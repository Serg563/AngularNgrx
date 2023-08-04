import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/Services/Auth/auth.service';
import userModel from 'src/app/models/userModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  userName!: string;
  name!: string;
  password!: string;
  role!: string;
  constructor(private auth: AuthService, private navigate: Router) {}

  PostUser() {
    const user: userModel = {
      userName: this.userName,
      name: this.name,
      password: this.password,
      role: this.role,
    };
    this.auth.Register(user).subscribe((response: any) => {
      if (response.isSuccess) {
        console.log('User registered successfully');
      } else {
        console.error('Error while registering user', response.errorMessages);
      }
    });
    this.navigate.navigate(['login']);
  }
}
