import { Routes } from '@angular/router';
import { PassengerTable } from './passenger-table/passenger-table';
import { PassengerForm } from './passenger-form/passenger-form';

export const routes: Routes = [
  { path: '', component: PassengerTable },
  { path: 'create', component: PassengerForm },
  { path: 'passengers', redirectTo: '', pathMatch: 'full' },
  { path: 'edit/:id', component: PassengerForm },
];
