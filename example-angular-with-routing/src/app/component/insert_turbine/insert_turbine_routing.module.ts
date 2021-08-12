import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertTurbineComponent } from './insert_turbine_component/insert_turbine.component';

const insertturbineRoutes: Routes = [
  { path: 'inserturbine', redirectTo: '/insertturbine' },
  { path: 'addturbine', redirectTo: '/insertturbine' },
  { path: 'insertturbine', component: InsertTurbineComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(insertturbineRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class InsertTurbineRoutingModule { }