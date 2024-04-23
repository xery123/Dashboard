import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'scheduler',
    loadComponent: () =>
      import('./page-schedule/ui/job-status.page/job-status.page.component'),
  },
  {
    path: 'messenger',
    loadComponent: () =>
      import('./page-messageEngine/ui/home-page/home-page.component'),
  },
];
