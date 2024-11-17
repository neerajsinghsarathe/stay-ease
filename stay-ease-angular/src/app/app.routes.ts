import { Routes } from '@angular/router';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {IndexPageComponent} from './pages/index-page/index-page.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {PlacePageComponent} from './pages/place-page/place-page.component';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {AccountPageComponent} from './pages/account-page/account-page.component';
import {BookingsPageComponent} from './pages/bookings-page/bookings-page.component';
import {PlacesPageComponent} from './pages/places-page/places-page.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexPageComponent
  },
  {
    path: 'search',
    component: IndexPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: LoginPageComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: 'place/:id',
    component: PlacePageComponent
  },
  {
    path: 'account',
    component: AccountPageComponent,
    children: [
      {
      path: '',
      component: ProfilePageComponent
      },
      {
        path: 'bookings',
        component: BookingsPageComponent
      },
      {
        path: 'places',
        component: PlacesPageComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];
