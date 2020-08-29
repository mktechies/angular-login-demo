import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../models/user-info.model';
import { LoginService } from '../authentication/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  login(userInfo: any) {
    let user = new UserInfo();
    user.username = userInfo.username;
    user.password = userInfo.password;
    this.loginService.login(user);
  }
}
