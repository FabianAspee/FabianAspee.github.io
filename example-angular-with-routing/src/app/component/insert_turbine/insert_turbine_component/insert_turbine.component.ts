import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WindTurbineInfo } from "src/app/classes/WindTurbineInfo";
import { InsertTurbineService } from "../insert_turbine.service";

@Component({
  selector: 'insert-turbine-component',
  templateUrl: './insert_turbine.template.html',
  providers: [InsertTurbineService],
  styleUrls: ['./insert_turbine.style.css']
})
export class InsertTurbineComponent{
    
    title = 'example-insert-angular-with-routing'; 
    constructor(private service: InsertTurbineService, private route:ActivatedRoute) {} 
     
    rest_post_call_insert = "Insert Turbine POST";
    rest_post_call_multiple_insert = "Insert Multiple Turbine POST";
    rest_post_call_list = "Insert Multiple Turbine"; 
   
    insertTurbinePost= ()=> this.setInsertTurbinePost();
    insertMultipleTurbinePost= ()=> this.setInsertMultipleTurbinePost(); 
  
    setInsertTurbinePost(turbine?: WindTurbineInfo) {
      throw new Error('Method not implemented.');
    }
    setInsertMultipleTurbinePost(list_turbine?: Array<WindTurbineInfo>) {
      throw new Error('Method not implemented.');
    }
}