import { Routes } from '@angular/router';
import {ParkingRegistrationsComponent} from "./modules/parking-registrations/parking-registrations.component";

export const routes: Routes = [
  {
    path: 'prices',
    loadChildren: () => import('./modules/prices/prices-routes'),
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'parking-registrations',
  },
  {
    path: 'parking-registrations', component: ParkingRegistrationsComponent,
  }
];
