import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './my-components/button.component';
import { InputComponent } from './my-components/input.component';
import { TextAreaComponent } from './my-components/textarea.component';
import { MessageService } from './config/message.service';
import { HttpErrorHandler } from './config/http-error-handler.service';
import { PageNotFoundComponent } from './page_not_found/page_not_found.component';

@NgModule({
  declarations: [
    AppComponent, 
    ButtonComponent, 
    InputComponent,
    TextAreaComponent,
    PageNotFoundComponent
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpErrorHandler,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
