import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Territory } from '../core/model/territory';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';


@Injectable({
  providedIn: 'root'
})
export class TerritoryService extends EntityCollectionServiceBase<Territory> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super('Territory', serviceElementsFactory);
  }

}

