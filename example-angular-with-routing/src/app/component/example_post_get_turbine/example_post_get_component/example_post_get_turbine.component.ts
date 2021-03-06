import { Component } from '@angular/core';
import { WindTurbineInfo } from '../../../classes/WindTurbineInfo';
import { Receiver } from '../../../module/stompjs/Receiver.module'; 
import { ExampleTurbineService } from '../example_post_get_turbine.service';

@Component({
  selector: 'example-root',
  templateUrl: './example_post_get_turbine.template.html', 
  providers: [ExampleTurbineService, Receiver],
  styleUrls: ['./example_post_get_turbine.style.css']
})
export class ExamplePostGetComponent{
  title = 'example-angular-with-routing';
  nameTurbine:string = "";
  allNameTurbine: string[] = [];
  editHero: string | undefined; // the hero currently being edited

  constructor(private configService: ExampleTurbineService,
    private receiver: Receiver) {
    receiver.connect(this.printValueRabbit)
  } 
   
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
    this.configService.getConnectionToRabbitTurbineById(id)
    .subscribe(allNameTurbine => console.log(allNameTurbine));
  }

  getConnectionToRabbitAllTurbine(): void { 
    this.configService.getConnectionToRabbitAllTurbine()
    .subscribe(allNameTurbine => console.log(allNameTurbine));
  }

  printValueRabbit=(x:string):string=>this.place_holder_result+="\n " + x;

  setInsertTurbinePost(turbine?: WindTurbineInfo) {
    throw new Error('Method not implemented.');
  }
  setInsertMultipleTurbinePost() {
    throw new Error('Method not implemented.');
  }


}