import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamplePostGetComponent } from './example_post_get_component/example_post_get_turbine.component';

const exampleturbineRoutes: Routes = [  
  { path: 'example', redirectTo: '/exampleturbine' }, 
  { path: 'exampleturbine', component: ExamplePostGetComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(exampleturbineRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ExampleTurbineRoutingModule { }