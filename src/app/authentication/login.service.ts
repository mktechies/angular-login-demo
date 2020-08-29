import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserInfo } from '../models/user-info.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loggedInUserInfo: BehaviorSubject<UserInfo> = new BehaviorSubject<
    UserInfo
  >(new UserInfo());

  constructor(private router: Router) {}

  get loggedInUser() {
    return this.loggedInUserInfo.asObservable();
  }

  login(userInfo: UserInfo) {
    if (!userInfo) return false;

    if (userInfo.username === 'admin' && userInfo.password === 'admin') {
      let user = new UserInfo();
      user.username = userInfo.username;
      user.password = userInfo.password;
      user.isLoggedIn = true;
      this.loggedInUserInfo.next(user);
      this.router.navigate(['/']);
    }
  }

  logout() {
    this.loggedInUserInfo.next(new UserInfo());
    this.router.navigate(['/login']);
  }
}
