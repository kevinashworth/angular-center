import { Component, inject, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroArrowLeftStartOnRectangleSolid, heroCog8ToothSolid } from '@ng-icons/heroicons/solid';
import { Observable } from 'rxjs';

import { AuthService } from '~/services/auth.service';

@Component({
  selector: 'sidebar-item-lower-button',
  imports: [NgIcon],
  templateUrl: './item-lower-button.component.html',
  styleUrl: './item-lower-button.component.css',
  providers: [provideIcons({ heroArrowLeftStartOnRectangleSolid, heroCog8ToothSolid })]
})
export class ItemLowerButtonComponent {
  isAuthenticated!: Observable<boolean>;
  authService = inject(AuthService);

  onClick: Function = () => {};
  @Input() icon: string = 'signout';
  iconName: string = 'heroArrowLeftStartOnRectangleSolid';

  components: { [key: string]: any } = {
    settings: 'heroCog8ToothSolid',
    signout: 'heroArrowLeftStartOnRectangleSolid'
  };

  clickFunctions: { [key: string]: Function } = {
    signout: () => {
      this.authService.signout();
    }
  };

  ngOnInit() {
    if (this.icon in this.components) {
      this.iconName = this.components[this.icon];
    }
    if (this.icon in this.clickFunctions) {
      this.onClick = this.clickFunctions[this.icon];
    }
  }
}
