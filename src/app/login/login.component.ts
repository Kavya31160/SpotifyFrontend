import { Component } from '@angular/core';
import { Login } from './login';
import { AuthService } from '../app.service';
import { JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public UserInfo: any;
  login: Login = new Login();
  constructor(private AuthService: AuthService) {
  }
  LoginUser() {
    this.AuthService.loginUser(this.login).subscribe(data => {

      this.UserInfo = JSON.stringify(data);

       const jsonObject = JSON.parse(this.UserInfo);

      localStorage.setItem("token",jsonObject.token);
      localStorage.setItem("userId",jsonObject.userId);

      console.log(data);
    },

      error => console.log(error));
  }
  Onlogin() {
    console.log(this.login);
    this.LoginUser();
  }



}
