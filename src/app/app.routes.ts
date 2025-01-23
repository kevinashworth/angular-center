import { Routes } from '@angular/router';

import { authGuard } from './guards/auth.guard';

import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

import { SignInFormComponent } from './auth/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './auth/sign-up-form/sign-up-form.component';

import { DashboardComponent } from './views/dashboard/dashboard.component';
import { CustomersComponent } from './views/customers/customers.component';
import { CampaignsComponent } from './views/campaigns/campaigns.component';
import { ProfileComponent } from './views/profile/profile.component';
import { NotificationsComponent } from './views/notifications/notifications.component';
import { SettingsComponent } from './views/settings/settings.component';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'campaigns', component: CampaignsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '', redirectTo: 'customers', pathMatch: 'full' }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'signin', component: SignInFormComponent },
      { path: 'signup', component: SignUpFormComponent }
      // { path: '', redirectTo: 'signin', pathMatch: 'full' }
    ]
  }
];
