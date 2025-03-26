import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  template: `
    <div>
      <h2>Register</h2>
      <form (ngSubmit)="onRegister()">
        <label for="username">Username:</label>
        <input type="text" id="username" [(ngModel)]="username" name="username" required><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" [(ngModel)]="password" name="password" required><br><br>
        <button type="submit">Register</button>
      </form>
    </div>
  `,
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onRegister() {
    // Placeholder registration logic
    if (this.username && this.password) {
      localStorage.setItem('auth', 'true');
      this.router.navigate(['/home']);
    }
  }
}
