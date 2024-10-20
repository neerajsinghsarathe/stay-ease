import { Routes } from '@angular/router';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {IndexPageComponent} from './pages/index-page/index-page.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {PlacePageComponent} from './pages/place-page/place-page.component';

export const routes: Routes = [
  {
    path: '',
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
    path: '**',
    redirectTo: 'not-found'
  }
];
