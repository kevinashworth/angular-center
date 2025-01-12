import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in-form',
  imports: [RouterLink],
  templateUrl: './sign-in-form.component.html'
})
export class SignInFormComponent {
  constructor(private router: Router) {}
  signInBypass = true;
  bypassLogin() {
    this.router.navigate(['/dashboard']);
  }
}
