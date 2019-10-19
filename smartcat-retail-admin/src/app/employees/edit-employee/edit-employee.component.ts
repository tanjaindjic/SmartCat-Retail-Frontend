import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Shop } from 'src/app/core/model/shop';
import { Territory } from 'src/app/core/model/territory';
import { TerritoryService } from 'src/app/territories/territory.service';
import { ShopService } from 'src/app/shops/shop.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css', '../../shared/forms.css']
})
export class EditEmployeeComponent implements OnInit {

  private shops;
  private selectedId;
  private employee;
  private firstName = "";
  private lastName = "";
  private email = "";
  private position = "";
  private selectedShop;
  private emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private territoryService: TerritoryService,
              private router: Router, private shopService: ShopService, private sharedService: SharedService) {
    
  }

  ngOnInit() {
    
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get('id'));
    
      this.shopService.getAll().toPromise().then(res => this.shops = res);
      this.employeeService.getByKey(this.selectedId).toPromise()
          .then(res => {
            this.employee = res;
            this.firstName = this.employee.firstName;
            this.lastName = this.employee.lastName;
            this.email = this.employee.email;
            this.position = this.employee.position;
            this.selectedShop = res.shop;
          })
          .catch(error => this.sharedService.home())
        
     });
  }

  save(){
    let employeeCopy = JSON.parse(JSON.stringify(this.employee));

    employeeCopy.firstName = this.firstName.trim();
    employeeCopy.lastName = this.lastName.trim();
    employeeCopy.email = this.email.trim();
    employeeCopy.position = this.position.trim();
    employeeCopy.shop = this.selectedShop;

    this.employeeService.update(employeeCopy);
  }

  delete(){
    this.employeeService.delete(this.employee);
    this.sharedService.home();
  }

  cancel(){
    this.sharedService.home();
  }

  validateEmail(){
    return (new RegExp(this.emailPattern).test(this.email.trim())) ? true : false;
  }

}
