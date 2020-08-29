import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginService } from './authentication/login.service';
import { AuthGuardService } from './auth-guard/auth-guard.service';

@NgModule({
  declarations: [AppComponent, LoginComponent, NavBarComponent, HomeComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, NgbModule],
  providers: [LoginService, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
