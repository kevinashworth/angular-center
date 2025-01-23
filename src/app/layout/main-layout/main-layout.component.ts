import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '~/services/auth.service';
import { SidebarComponent } from '../sidebar/sidebar/sidebar.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './main-layout.component.html'
})
export class MainLayoutComponent {
  isAuthenticated!: Observable<boolean>;
  authService = inject(AuthService);

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated$;
    if (!this.authService.isAuthenticated()) {
      this.authService.signout();
    }
  }
}
