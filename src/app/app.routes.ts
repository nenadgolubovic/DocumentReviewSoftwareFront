

import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EngineHomeComponent } from './components/engine-home/engine-home.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'engine-home', component:EngineHomeComponent  },
  { path: '**', redirectTo: '' }                
];