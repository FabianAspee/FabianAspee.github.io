import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config/config.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ConfigService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nameTurbine:string = "";
  heroes: string[] = [];
  editHero: string | undefined; // the hero currently being edited

  constructor(private configService: ConfigService) {}
  title = 'example-angular';
  rest_get_call ="Turbine by Id";
  rest_get_call_list ="All Turbine";
  rest_post_call = "Insert Turbine";
  rest_post_call_list = "Insert Multiple Turbine";
  rabbit_call = "Real Time Name Turbine";
  place_holder_result = "result of request";
  place_holder_input = "id turbine";

  ngOnInit(){ 
    
  }
  getTurbineByName(id:number): void {
    this.configService.getNameTurbineById(id)
      .subscribe(nameTurbine => (this.nameTurbine = nameTurbine));
  }
}
