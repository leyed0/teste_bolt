import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './app/auth/login/login.component';
import { RegisterComponent } from './app/auth/register/register.component';
import { HomeComponent } from './app/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule.forRoot(routes)],
  template: `<router-outlet></router-outlet>`,
})
export class App {}

bootstrapApplication(App);
