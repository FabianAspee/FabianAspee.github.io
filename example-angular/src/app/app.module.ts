import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './my-components/button.component';
import { InputComponent } from './my-components/input.component';
import { TextAreaComponent } from './my-components/textarea.component';

@NgModule({
  declarations: [
    AppComponent, 
    ButtonComponent, 
    InputComponent,
    TextAreaComponent
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
