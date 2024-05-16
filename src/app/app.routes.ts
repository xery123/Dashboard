import { Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import HomePageComponent from './messenger/ui/home-page/home-page.component';
import StatusJobComponent from './scheduler/ui/job-status.page/job-status.page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'scheduler', pathMatch: 'full' },
  {
    path: 'scheduler',
    component: StatusJobComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'messenger',
    component: HomePageComponent,
    canActivate: [AuthGuard],
  },
];
