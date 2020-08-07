import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard';

export const AppRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
    { path: 'dashboard',  component: DashboardComponent }
];
