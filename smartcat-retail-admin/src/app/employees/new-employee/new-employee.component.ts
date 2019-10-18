import { Component, OnInit } from '@angular/core';
import { AppStoreService } from 'src/app/store/app-store.service';
import { Router } from '@angular/router';

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
  
  constructor(private appStore: AppStoreService, private router: Router) {
    this.appStore.allShops();
    this.appStore._shops.subscribe(
      val => this.shops = val
    )
   }

  ngOnInit() {
  }

  cancel(){
    this.router.navigate(['/home'])
  }

  save(){
    this.appStore.addEmployee(this.firstName, this.lastName, this.email, this.position, this.selectedShop);
    this.cancel();
  }

}
