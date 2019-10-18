import { Component, OnInit } from '@angular/core';
import { AppStoreService } from 'src/app/store/app-store.service';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Shop } from 'src/app/core/model/shop';
import { Territory } from 'src/app/core/model/territory';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css', '../../territories/edit-territory/edit-territory.component.css']
})
export class EditEmployeeComponent implements OnInit {

  shops;
  selectedId;
  employee;
  firstName;
  lastName;
  age;
  position;
  selectedShop;
  constructor(private appStore: AppStoreService, private employeeService: EmployeeService, private route: ActivatedRoute,
              private router: Router) {
    this.appStore.allShops();
    this.appStore._shops.subscribe(
      val => this.shops = val
    )
  }

  ngOnInit() {
    
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get('id'));
      this.employeeService.getEmployee(this.selectedId).subscribe(
      (res: any) => {
        this.employee = res.employee;
        this.firstName = this.employee.firstName;
        this.lastName = this.employee.lastName;
        this.age = this.employee.age;
        this.position = this.employee.position;
        this.selectedShop = res.shopId;
      },
      (error: any) => alert("error in edit-employee"))
    })
  }

  save(){
    this.employee.firstName = this.firstName;
    this.employee.lastName = this.lastName;
    this.employee.age = this.age;
    this.employee.position = this.position;
    this.appStore.updateEmployee( this.employee, this.selectedShop);
  }

  delete(){
    this.appStore.removeEmployee( this.employee.id);
    this.cancel();
  }

  cancel(){
    this.router.navigate(['/home'])
  }

}
