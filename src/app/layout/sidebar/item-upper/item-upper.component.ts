import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroChartPieSolid, heroCog8ToothSolid, heroMapPinSolid, heroUsersSolid } from '@ng-icons/heroicons/solid';
import { campaign } from '~/icons/campaign';

@Component({
  selector: 'sidebar-item-upper',
  imports: [NgIcon, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './item-upper.component.html',
  styleUrl: './item-upper.component.css',
  providers: [provideIcons({ campaign, heroChartPieSolid, heroCog8ToothSolid, heroMapPinSolid, heroUsersSolid })]
})
export class ItemUpperComponent {
  @Input() path: string = '/dashboard';
  @Input() icon: string = 'dashboard';
  iconName: string = 'heroChartPieSolid';

  components: { [key: string]: any } = {
    campaign: 'campaign',
    campaigns: 'campaign',
    customers: 'heroUsersSolid',
    dashboard: 'heroChartPieSolid',
    profile: 'heroMapPinSolid',
    settings: 'heroCog8ToothSolid'
  };

  ngOnInit() {
    if (this.icon in this.components) {
      this.iconName = this.components[this.icon];
    }
  }
}
