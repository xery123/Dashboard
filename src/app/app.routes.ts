import { Routes } from '@angular/router';

export const routes: Routes = [

{
  path: 'schedule',
  loadComponent: () => import('./page-schedule/ui/job-status.page/job-status.page.component'),
},
{
  path: 'message',
  loadComponent: () => import('./page-messageEngine/home-page/home-page.component'),
},


];
