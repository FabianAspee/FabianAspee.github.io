import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InsertTurbineComponent } from './insert_turbine_component/insert_turbine.component'; 

import { InsertTurbineRoutingModule } from './insert_turbine_routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InsertTurbineRoutingModule
  ],
  declarations: [
    InsertTurbineComponent
  ]
})
export class InsertTurbineModule {}