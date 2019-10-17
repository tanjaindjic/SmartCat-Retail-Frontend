import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Territory } from '../core/model/territory';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { BehaviorSubject } from 'rxjs';
import { TerritoryService } from '../territories/territory.service';


@Injectable({
  providedIn: 'root'
})
export class TerritoryStoreService {

    constructor(private territoryService: TerritoryService) {
        this.fetchAll()
    }
    
  private readonly _territories = new BehaviorSubject<Territory[]>([]);
  entities$ = this._territories.asObservable();

  async fetchAll() {
    this.territories = await this.territoryService.index().toPromise();
  }

  get territories(): Territory[] {
    return this._territories.getValue();
  }

  set territories(val: Territory[]) {
    this._territories.next(val);
  }

  addTerritory(city: string, postal: string, country: string) {
    this.territories = [
      ...this.territories, 
      {id:null, city: city, postal: postal, country: country, shops:[]}
    ];
  }

  removeTodo(id: number) {
    this.territories = this.territories.filter(t => t.id !== id);
  }

  // private _url: string = "http://localhost:8096/territory"

  // getTerritories() :Observable<Territory[]>{
  //   let retval = this.http.get<Territory[]>(this._url)
  //                   .catch(this.errorHandler);
  //   console.log(retval)
  //   return retval;
                    

  
}

