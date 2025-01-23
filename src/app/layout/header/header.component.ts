import { Component, input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroMapPinSolid } from '@ng-icons/heroicons/solid';

import { DisplayTheGetTokensComponent } from '~/components/display-the-get-tokens/display-the-get-tokens.component';

@Component({
  selector: 'app-header',
  imports: [NgIcon, DisplayTheGetTokensComponent],
  templateUrl: './header.component.html',
  providers: [provideIcons({ heroMapPinSolid })]
})
export class HeaderComponent {
  title = input('');
  subtitle = input('');
  data = {
    name: 'Hama Sushi',
    address1: '153 West Crossroads Boulevard Suite E',
    city: 'Saratoga Springs'
  };
}
