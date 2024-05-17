import { Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import HomePageComponent from '../messenger/ui/home-page/home-page.component';

export const ROUTES: Routes = [
  { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
];
