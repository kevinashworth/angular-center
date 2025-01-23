import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '~/services/auth.service';
import { ItemUpperComponent } from '../item-upper/item-upper.component';
import { ItemLowerButtonComponent } from '../item-lower-button/item-lower-button.component';
import { GotYouYourBusinessImage } from '~/images/got-you-your-business/got-you-your-business.component';

@Component({
  selector: 'app-sidebar',
  imports: [GotYouYourBusinessImage, ItemUpperComponent, ItemLowerButtonComponent, RouterModule],
  templateUrl: './sidebar.component.html',
  host: { class: 'flex-shrink flex-grow-0 bg-vibrant', 'aria-label': 'Sidebar Navigation Menu' }
})
export class SidebarComponent {
  isAuthenticated!: Observable<boolean>;
  authService = inject(AuthService);

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated$;
  }
}
