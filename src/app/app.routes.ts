import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: () => {
      return '/home';
    },
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./layouts/home-layout/home-routes').then((m) => m.routes),
  },
  {
    path: '**',
    redirectTo: () => {
      return '/home';
    },
    pathMatch: 'full',
  },
];
