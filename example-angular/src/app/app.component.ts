import { Component, OnInit } from '@angular/core';
import { WindTurbineInfo } from './classes/WindTurbineInfo';
import { ConfigService } from './config/config.service';
import { Receiver } from './model/Receiver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ConfigService, Receiver],
  styleUrls: ['./app.component.css']
})
export class AppComponent{ 
 
  nameTurbine:string = "";
  allNameTurbine: string[] = [];
  editHero: string | undefined; // the hero currently being edited

  constructor(private configService: ConfigService,private receiver: Receiver) {
    
  }
  title = 'example-angular';
  rest_get_call ="Turbine by Id GET";
  rest_get_call_list ="All Turbine GET";
  rest_get_call_list_tension ="All Tension Line GET";
  rest_get_call_map_torque ="All Turbine with Torque GET";
  rest_get_call_set_torque ="All Turbine without Torque GET";
  rest_post_call = "Turbine by Id POST";
  rest_post_call_all = "All Turbine POST";
  rest_post_call_insert = "Insert Turbine POST";
  rest_post_call_multiple_insert = "Insert Multiple Turbine POST";
  rest_post_call_list = "Insert Multiple Turbine";
  rabbit_call_id = "Real Time Name Turbine by Id";
  rabbit_call = "Real Time Name Turbine";
  place_holder_result = "result of request";
  place_holder_input = "id turbine";

  turbineById= ()=> this.getTurbineByName(1); 
  allTurbine= ()=> this.getAllTurbine();
  allTensionLine= ()=> this.getAllTensionLine();
  allTurbineWithTorque= ()=> this.getAllTurbineWithTorque();
  allTurbineWithoutTorque= ()=> this.getAllTurbineWithoutTorque();
  turbineByIdPostCall= ()=> this.getTurbineByIdPostCall(1);
  allTurbinePostCall= ()=> this.getAllTurbinePostCall();
  insertTurbinePost= ()=> this.setInsertTurbinePost();
  insertMultipleTurbinePost= ()=> this.setInsertMultipleTurbinePost();
  connectionToRabbitTurbineById= ()=> this.getConnectionToRabbitTurbineById(1);
  connectionToRabbitAllTurbine= ()=> this.getConnectionToRabbitAllTurbine();

  getTurbineByName(id:number): void { 
    this.configService.getNameTurbineById(id)
      .subscribe(nameTurbine =>(this.place_holder_result = nameTurbine));
  }
  
  getAllTurbine(): void { 
    this.configService.getAllTurbine()
      .subscribe(allNameTurbine => (this.place_holder_result = allNameTurbine));
  }

  getAllTensionLine(): void {
    this.configService.getAllTensionLine()
      .subscribe(allNameTurbine => (this.place_holder_result =allNameTurbine.join(", ")));
  }

  getAllTurbineWithTorque(): void {
    this.configService.getAllTurbineWithTorque()
      .subscribe(allNameTurbine =>(this.place_holder_result =Object.entries(allNameTurbine)
          .map(([key,value])=>value + ' id is '+ key).join(", '\n'")));
  }

  getAllTurbineWithoutTorque(): void {
    this.configService.getAllTurbineWithoutTorque()
      .subscribe(allNameTurbine => (this.place_holder_result = allNameTurbine.join(", ")));
  }

  getTurbineByIdPostCall(id:number): void { 
    this.configService.getTurbineByIdPostCall(id)
      .subscribe(nameTurbine =>(this.place_holder_result = nameTurbine));
  }
  
  getAllTurbinePostCall(): void { 
    this.configService.getAllTurbinePostCall()
      .subscribe(allNameTurbine => (this.place_holder_result = allNameTurbine.join(", ")));
  }
  
  getConnectionToRabbitTurbineById(id:number): void { 
    this.configService.getConnectionToRabbitTurbineById(id);
  }

  getConnectionToRabbitAllTurbine(): void { 
    this.configService.getConnectionToRabbitAllTurbine();
  }
  setInsertTurbinePost(turbine?: WindTurbineInfo) {
    throw new Error('Method not implemented.');
  }
  setInsertMultipleTurbinePost() {
    throw new Error('Method not implemented.');
  }
}
