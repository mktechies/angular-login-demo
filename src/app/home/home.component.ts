import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from '../models/user-info.model';
import { LoginService } from '../authentication/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loggedInUserInfo$: Observable<UserInfo>;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loggedInUserInfo$ = this.loginService.loggedInUser;
  }
}
