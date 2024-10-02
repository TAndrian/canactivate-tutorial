import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { ProfileComponent } from 'src/app/features/profile/component/profile.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [{ path: 'profile', component: ProfileComponent }],
  },
];
