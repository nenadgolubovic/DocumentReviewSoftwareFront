

import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EngineHomeComponent } from './components/engine-home/engine-home.component';
import { AuthGuard } from './guards/auth-guard.guard';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'engine-home', component:EngineHomeComponent , canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }                
];