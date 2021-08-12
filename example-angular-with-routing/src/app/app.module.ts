import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleTurbineModule } from './component/example_post_get_turbine/example_post_get_turbine.module';
import { InsertTurbineModule } from './component/insert_turbine/insert_turbine.module';
import { NavigationComponent } from './component/navigation/navigation.component';
import { PageNotFoundComponent } from './component/page_not_found/page_not_found.component';
import { HttpErrorHandler } from './config/http-error-handler.service';
import { MessageService } from './config/message.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './component/login/login.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    ExampleTurbineModule,
    InsertTurbineModule,
    LoginModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent, 
    NavigationComponent,
    PageNotFoundComponent, 
  ], 
  providers: [HttpErrorHandler,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
