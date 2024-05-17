import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'scheduler', pathMatch: 'full' },
  {
    path: 'messenger',
    loadChildren: () =>
      import('./messenger module/routing').then((mod) => mod.ROUTES),
  },
  {
    path: 'scheduler',
    loadChildren: () =>
      import('./scheduler module/module.routes').then((mod) => mod.ROUTES),
  },
];
