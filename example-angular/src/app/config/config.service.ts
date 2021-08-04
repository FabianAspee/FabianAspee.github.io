import { Injectable } from "@angular/core";
import { HttpClient, HttpParams} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

@Injectable()
export class ConfigService{ 
    turbineUrl = 'api/nameturbine';  // URL to web api
    allTurbineUrl = 'api/nameallturbine';
    private handleError: HandleError;
    
    constructor (private http: HttpClient,
        httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('TurbineService');
      }

    /** GET name turbine from the server */
    getNameTurbineById(id: number): Observable<string> {
        const options = { params: new HttpParams().set('name', 1) };
        return this.http.get<string>(this.turbineUrl, options)
        .pipe(catchError(this.handleError('getNameTurbine', '')));
    }

    /* GET heroes whose name contains search term */
    getAllTurbine(): Observable<string[]> { 
        // Add safe, URL encoded search parameter if there is a search term  
        return this.http.get<string[]>(this.turbineUrl)
        .pipe(
            catchError(this.handleError<string[]>('getAllTurbine', []))
        );
    }

}