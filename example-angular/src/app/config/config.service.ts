import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';



@Injectable()
export class ConfigService{ 
  url = 'http://localhost:8080/'
  turbineUrl = 'api/nameturbine';  // URL to web api
  turbineUrlPost = 'api/nameturbinepost';  // URL to web api
  allTurbineUrl = 'api/nameallturbine';
  allTurbineUrlPost = 'api/nameallturbinepost';
  tensionLineUrl = 'api/tensionlineturbine';  // URL to web api
  turbineWithTorquerUrl = 'api/turbinewithtorquer';
  turbinewithoutTorquerUrl = 'api/turbinewithouttorquer';  // URL to web api
  turbineUrlCallRabbit  ='api/realtimerabbitturbinebyid'
  private handleError: HandleError;

  constructor (private http: HttpClient,
      httpErrorHandler: HttpErrorHandler) {
      this.handleError = httpErrorHandler.createHandleError('TurbineService');
    }

  /** GET name turbine from the server */
  getNameTurbineById(id: number): Observable<string> {
      const options = { 
        params: new HttpParams().set('name', 1),
        responseType: 'json' as const};

      return this.http.get<string>(this.url + this.turbineUrl, options)
      .pipe(catchError(this.handleError('getNameTurbine', '111111111')));
  }

  /* GET heroes whose name contains search term */
  getAllTurbine =():Observable<string>=>this.http.get<string>(this.url + this.allTurbineUrl)
      .pipe(catchError(this.handleError<string>('getAllTurbine', ''))); 

  /* GET heroes whose name contains search term */
  getAllTensionLine=():Observable<string[]>=>this.http.get<string[]>(this.url+this.tensionLineUrl)
    .pipe(catchError(this.handleError("getAllTensionLine",[]))) 

  /* GET heroes whose name contains search term */
  getAllTurbineWithTorque = ():Observable<Map<number,string>> => this.http.get<Map<number,string>>(this.url+this.turbineWithTorquerUrl)
  .pipe(catchError(this.handleError('getAllTurbineWithTorque',new Map<number,string>())))
  
  /* GET heroes whose name contains search term */
  getAllTurbineWithoutTorque = ():Observable<string[]> => this.http.get<string[]>(this.url+this.turbinewithoutTorquerUrl)
  .pipe(catchError(this.handleError('getAllTurbineWithoutTorque',[])))

  /* GET heroes whose name contains search term */
  getTurbineByIdPostCall(id: number): Observable<string>{ 
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      params: new HttpParams().set('name', 2),
      responseType: 'json' as const
    };
      return this.http.post<string>(this.url+this.turbineUrlPost,undefined,httpOptions)
      .pipe(catchError(this.handleError('getTurbineByIdPostCall', '')));  
  } 

  /* GET heroes whose name contains search term */
  getAllTurbinePostCall():Observable<string[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }), 
      responseType: 'json' as const
    };
    return this.http.post<string[]>(this.url+this.allTurbineUrlPost,undefined,httpOptions)
    .pipe(catchError(this.handleError<string[]>('getAllTurbinePostCall', [])))
  }

  /* GET heroes whose name contains search term */
  getConnectionToRabbitTurbineById(id: number): void { 
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }), 
      params: new HttpParams().set('name', 2)
    } 
    this.http.post(this.url+this.turbineUrlCallRabbit,undefined,httpOptions)
    .pipe(catchError(this.handleError('getAllTurbinePostCall')))
  }

  /* GET heroes whose name contains search term */
  getConnectionToRabbitAllTurbine(): void { 
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }), 
      params: new HttpParams().set('name', 2)
    } 
    this.http.post(this.url+this.turbineUrlCallRabbit,undefined,httpOptions)
    .pipe(catchError(this.handleError('getAllTurbinePostCall')))
  }


}