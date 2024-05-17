import { Routes } from '@angular/router';
import StatusJobComponent from '../scheduler/ui/job-status.page/job-status.page.component';
import { AuthGuard } from '../guard/auth.guard';

export const ROUTES: Routes = [
  { path: '', component: StatusJobComponent, canActivate: [AuthGuard] },
];
