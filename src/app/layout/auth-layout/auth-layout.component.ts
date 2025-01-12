import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SignInImageComponent } from '~/auth/sign-in-image/sign-in-image.component';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, SignInImageComponent],
  templateUrl: './auth-layout.component.html'
})
export class AuthLayoutComponent {}
