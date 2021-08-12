import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable, Optional } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { WindTurbineInfo } from "src/app/classes/WindTurbineInfo";
import { HandleError, HttpErrorHandler } from "src/app/config/http-error-handler.service";


@Injectable()
export class InsertTurbineService{
  url = 'http://localhost:8080/' 
  insertTurbineUrl = 'api/insertturbine';  // URL to web api
  insertMultipleTurbineUrl  = 'api/insertmultipleturbine'; 
  private handleError: HandleError;
  private printError=(e?:Error)=>alert("deve inserire qualcosa")
  constructor (private http: HttpClient,
      httpErrorHandler: HttpErrorHandler) {
      this.handleError = httpErrorHandler.createHandleError('TurbineService');
    }
  
  
  private getHeaderInsert: (turbine?:WindTurbineInfo, turbines?:Array<WindTurbineInfo>)=>{} =
  (turbine,turbines)=> turbine==undefined?(turbines!=undefined? this.getHttpOptions('turbines',undefined,turbines): {}):
  this.getHttpOptions('turbine',turbine)

  private getHttpOptions: (root:string, turbine?:WindTurbineInfo, turbines?:Array<WindTurbineInfo>)=>{} = (root,turbine,turbines)=>{
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }), 
    params: new HttpParams().set(root,JSON.stringify(turbine!=undefined?turbine:turbines))
    };
    return httpOptions;
  }; 
   
  /* GET heroes whose name contains search term */
  insertTurbine: (turbine: WindTurbineInfo)=> Observable<number>= turbine=>
   this.http.post<number>(this.url+this.insertTurbineUrl,undefined,this.getHeaderInsert(turbine))
      .pipe(catchError(this.handleError('insertTurbine', -1)));  

   
  /* GET heroes whose name contains search term */ 
  insertMultipleTurbine: (turbines: Array<WindTurbineInfo>)=> Observable<Array<number>>= turbines=>
   this.http.post<Array<number>>(this.url+this.insertMultipleTurbineUrl,undefined,this.getHeaderInsert(undefined,turbines))
      .pipe(catchError(this.handleError('insertTurbine', [])));
}  
   