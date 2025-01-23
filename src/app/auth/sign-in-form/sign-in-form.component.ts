import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '~/services/auth.service';

@Component({
  selector: 'app-sign-in-form',
  imports: [FormsModule],
  templateUrl: './sign-in-form.component.html'
})
export class SignInFormComponent {
  authService = inject(AuthService);
  router = inject(Router);
  email: string = '';
  password: string = '';

  signInBypass = true;

  onLogin() {
    if (this.authService.signin(this.email, this.password)) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }

  bypassLogin() {
    this.email = 'admin';
    this.password = 'admin';
    this.onLogin();
  }
}
