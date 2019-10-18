import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Territory } from '../core/model/territory';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory, getUuid } from '@ngrx/data';
import { BehaviorSubject } from 'rxjs';
import { TerritoryService } from '../territories/territory.service';
import { ShopService } from '../shops/shop.service';
import { Shop } from '../core/model/shop';
import { Employee } from '../core/model/employee';
import { EmployeeService } from '../employees/employee.service';


@Injectable({
  providedIn: 'root'
})
export class AppStoreService {

    constructor(private territoryService: TerritoryService, private shopService: ShopService, private employeeService: EmployeeService) {
        this.fetchAll()
    }
    
  public readonly _territories = new BehaviorSubject<Territory[]>([]);
  public readonly _shops = new BehaviorSubject<Shop[]>([]);

  async fetchAll() {
    this.territories = await this.territoryService.index().toPromise();
  }
  
  async allShops(){
   this.shops = await this.shopService.getShops().toPromise();
  }

  set territories(val: Territory[]) {
    this._territories.next(val);
  }

  get territories(): Territory[] {
    return this._territories.getValue();
  }

  getTerritory(id: number): Territory {
    return this._territories.getValue().find(t => t.id === id);
  }

  set shops(val: Shop[]) {
    this._shops.next(val);
  }

  get shops(): Shop[] {
    return this._shops.getValue();
  }

  addTerritory(city: string, postal: string, country: string) {
    this.territoryService.create( {id:null, city: city, postal: postal, country: country, shops:[]})
                          .toPromise()
                          .then(res => this.fetchAll())
   
  }

  updateTerritory(territory : Territory): void {
    this.territoryService.update(territory).subscribe();
  }

  
  removeTerritory(id: number) {
    this.territoryService.remove(id)
                          .toPromise()
                          .then(res => this.fetchAll())
    
  }


  addShop(name: string, address: string, phone: string, territoryId: number) {
    this.shopService.create( {id:null, name: name, address:address, phone: phone, employees:[]}, territoryId)
                          .toPromise()
                          .then(res => this.fetchAll())
   
  }

  updateShop(shop: Shop, territoryId: number) {
    this.shopService.update( shop, territoryId)
                          .toPromise()
                          .then(res => this.fetchAll())
   
  }

  removeShop(id: number) {
  this.shopService.remove(id)
                        .toPromise()
                        .then(res => this.fetchAll())
  
  }

  addEmployee(firstName: string, lastName: string, age: number, position: string, shopId: number) {
    this.employeeService.create( {id:null, firstName: firstName, lastName: lastName, age: age, position: position}, shopId)
                          .toPromise()
                          .then(res => this.fetchAll())
  }
  
  updateEmployee(employee : Employee, shopId: number): void {
    this.employeeService.update( employee, shopId)
                          .toPromise()
                          .then(res => this.fetchAll())
  }

  
  removeEmployee(id: number) {
    this.employeeService.remove(id)
                        .toPromise()
                        .then(res => this.fetchAll())
    
  }
  
}

