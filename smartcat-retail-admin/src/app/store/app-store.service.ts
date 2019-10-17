import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Territory } from '../core/model/territory';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory, getUuid } from '@ngrx/data';
import { BehaviorSubject } from 'rxjs';
import { TerritoryService } from '../territories/territory.service';


@Injectable({
  providedIn: 'root'
})
export class AppStoreService {

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

  getTerritory(id: number): Territory {
    return this._territories.getValue().find(t => t.id === id);
  }

  set territories(val: Territory[]) {
    this._territories.next(val);
  }

  addTerritory(city: string, postal: string, country: string) {
    let t = this.territoryService.create( {id:null, city: city, postal: postal, country: country, shops:[]}).toPromise()
                                  .then(res => t = res);
    this._territories.next([...this.territories, t]);
   
  }

  updateTerritory(newT : Territory): void {
    let oldT = this._territories.getValue().find(t => t.id === newT.id);
    oldT.city = oldT.city != newT.city ? newT.city : oldT.city;
    oldT.postal = oldT.postal != newT.postal ? newT.postal : oldT.postal;
    oldT.country = oldT.country != newT.country ? newT.country : oldT.country;
    this.territoryService.update(newT).toPromise();
  }

  
  removeTerritory(id: number) {
    this.territories = this.territories.filter(t => t.id !== id);
  }

  
}

