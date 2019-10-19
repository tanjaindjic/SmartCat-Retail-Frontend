import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { SharedService } from 'src/app/shared/shared.service';
import { TerritoryService } from 'src/app/territories/territory.service';
import { ShopService } from 'src/app/shops/shop.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css', '../../shared/forms.css']
})
export class NewEmployeeComponent implements OnInit {

  private shops;
  private firstName;
  private lastName;
  private email;
  private position;
  private selectedShop;
  
  constructor(private router: Router, private employeeService: EmployeeService, private sharedService: SharedService, 
              private territoryService: TerritoryService, private shopService: ShopService) {}

  ngOnInit() {
    this.shopService.getAll().toPromise()
      .then(res => this.shops = res);
  }

  cancel(){
    this.sharedService.home();
  }

  save(){
    this.employeeService.add({id: null, firstName: this.firstName, lastName: this.lastName, email: this.email, 
      position: this.position, shop: this.selectedShop}).toPromise()
      .then(res => this.territoryService.getAll());
    this.sharedService.home();
  }

}
