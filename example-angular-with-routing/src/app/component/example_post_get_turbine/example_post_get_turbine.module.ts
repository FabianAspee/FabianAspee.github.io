import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExamplePostGetComponent } from './example_post_get_component/example_post_get_turbine.component'; 

import { ExampleTurbineRoutingModule } from './example_post_get_turbine_routing.module';
import { TextAreaComponent } from '../textarea/textarea.component';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ExampleTurbineRoutingModule
  ],
  declarations: [

    TextAreaComponent,
    InputComponent,
    ButtonComponent,
    ExamplePostGetComponent
  ]
})
export class ExampleTurbineModule {}