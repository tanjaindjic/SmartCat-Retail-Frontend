import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Territory } from '../core/model/territory';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable({
  providedIn: 'root'
})
export class TerritoryService {

  constructor(private http: HttpClient) { }

  private _url: string = "http://localhost:8096/territory"

  getTerritories() :Observable<Territory[]>{
    let retval = this.http.get<Territory[]>(this._url)
                    .catch(this.errorHandler);
    console.log(retval)
    return retval;
                    
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error")
  }
  
}

