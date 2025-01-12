import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { SignInFormComponent } from './auth/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './auth/sign-up-form/sign-up-form.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'signin', component: SignInFormComponent },
      { path: 'signup', component: SignUpFormComponent }
    ]
  },
  { path: '', component: MainLayoutComponent, children: [{ path: 'dashboard', component: DashboardComponent }] }
  // {
  //   path: 'todos',
  //   loadComponent: () =>
  //     import('./todos/todos.component').then((m) => m.TodosComponent),
  // },
];
