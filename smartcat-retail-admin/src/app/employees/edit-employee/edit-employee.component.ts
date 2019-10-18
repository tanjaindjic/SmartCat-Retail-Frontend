import { Component, OnInit } from '@angular/core';
import { AppStoreService } from 'src/app/store/app-store.service';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Shop } from 'src/app/core/model/shop';
import { Territory } from 'src/app/core/model/territory';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css', '../../shared/forms.css']
})
export class EditEmployeeComponent implements OnInit {

  private shops;
  private selectedId;
  private employee;
  private firstName;
  private lastName;
  private email;
  private position;
  private selectedShop;
  
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
        this.email = this.employee.email;
        this.position = this.employee.position;
        this.selectedShop = res.shopId;
      },
      (error: any) => this.router.navigate(['/home']))
    })
  }

  save(){
    this.employee.firstName = this.firstName;
    this.employee.lastName = this.lastName;
    this.employee.email = this.email;
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
