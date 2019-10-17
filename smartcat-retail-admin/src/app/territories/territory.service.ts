import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Territory } from '../core/model/territory';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable({
  providedIn: 'root'
})
export class TerritoryService {

  public API_ENDPOINT = "http://localhost:8096"

  constructor(private http: HttpClient) { }

  url: string = "territory"
 
  index() {
    return this.http.get<Territory[]>(`${this.API_ENDPOINT}/${this.url}`);
  }

  create(territory: Territory) {
     return this.http.post(`${this.API_ENDPOINT}/${this.url}`, territory);
  }

  update(territory: Territory) {
    return this.http.put<Territory>(`${this.API_ENDPOINT}/${this.url}/${territory.id}`, territory);
  }


  remove(id: number) {
    return this.http.delete(`${this.API_ENDPOINT}/${this.url}/${id}`);
  }
  
}

