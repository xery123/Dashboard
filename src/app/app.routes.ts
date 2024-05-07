import { Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import HomePageComponent from './page-messageEngine/ui/home-page/home-page.component';
import StatusJobComponent from './page-schedule/ui/job-status.page/job-status.page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'scheduler', pathMatch: 'full' },
  {
    path: 'scheduler',
    component: StatusJobComponent,
    canActivate: [AuthGuard], // Agrega el AuthGuard aquí
  },

  {
    path: 'messenger',
    component: HomePageComponent,
    canActivate: [AuthGuard], // Agrega el AuthGuard aquí
  },
];
