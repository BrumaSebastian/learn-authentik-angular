import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: AuthCallbackComponent },
];
