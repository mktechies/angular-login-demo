import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from '../models/user-info.model';
import { LoginService } from '../authentication/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  loggedInUserInfo$: Observable<UserInfo>;
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loggedInUserInfo$ = this.loginService.loggedInUser;
  }

  logout() {
    this.loginService.logout();
  }
}
