import { Routes } from '@angular/router';

  

import { BodyComponent } from './Components/Home/body/body.component';



  

export const routes: Routes = [

      { path: 'home', redirectTo: 'home/index', pathMatch: 'full'},

      { path: 'home/index', component: BodyComponent },

  

  ];