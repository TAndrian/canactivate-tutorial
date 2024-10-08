import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [authGuard],
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./layouts/home-layout/home-routes').then((m) => m.routes),
    canActivate: [authGuard],
  },
  {
    path: '**',
    redirectTo: () => {
      return '';
    },
    pathMatch: 'full',
  },
];
