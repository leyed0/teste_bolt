import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <div>
      <h2>Login</h2>
      <form (ngSubmit)="onLogin()">
        <label for="username">Username:</label>
        <input type="text" id="username" [(ngModel)]="username" name="username" required><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" [(ngModel)]="password" name="password" required><br><br>
        <button type="submit">Login</button>
      </form>
    </div>
  `,
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Placeholder authentication logic
    if (this.username && this.password) {
      localStorage.setItem('auth', 'true');
      this.router.navigate(['/home']);
    }
  }
}
