import { Component } from '@angular/core';
import { ConfigService } from './config/config.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example-angular';
  rest_get_call ="Turbine by Id";
  rest_get_call_list ="All Turbine";
  rest_post_call = "Insert Turbine";
  rest_post_call_list = "Insert Multiple Turbine";
  rabbit_call = "Real Time Name Turbine";
  place_holder_result = "result of request";
  place_holder_input = "id turbine";
  onInit(){
    let myCompOneObj = new ConfigService(); 
    myCompOneObj.myFunctionOne();
  }
}
