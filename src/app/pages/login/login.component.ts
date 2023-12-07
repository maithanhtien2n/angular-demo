import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginInfo: any = {
    username: '',
    password: '',
  };

  error: any = {
    username: '',
    password: '',
  };

  constructor(private router: Router) {}

  onClickButtonRegister() {
    this.router.navigate(['register']);
  }

  onChangeUserName() {
    if (!this.loginInfo.username) {
      this.error.username = 'Vui lòng nhập tên người dùng.';
      return true;
    }
    this.error.username = '';
    return false;
  }

  onChangePassword() {
    if (!this.loginInfo.password) {
      this.error.password = 'Vui lòng nhập tên người dùng.';
      return true;
    }
    this.error.password = '';
    return false;
  }

  onValidate() {
    if (this.onChangeUserName() || this.onChangePassword()) return true;
    else return false;
  }

  onClickLogin() {
    if (this.onValidate()) return;
    this.router.navigate(['']);
  }
}
