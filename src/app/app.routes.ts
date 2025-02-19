import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: AuthCallbackComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '' },
];
