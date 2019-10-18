import { Component, OnInit } from '@angular/core';
import { AppStoreService } from 'src/app/store/app-store.service';
import { Territory } from 'src/app/core/model/territory';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-shop',
  templateUrl: './new-shop.component.html',
  styleUrls: ['./new-shop.component.css', '../../shared/forms.css']
})
export class NewShopComponent implements OnInit {

  territories: Territory[];
  private shopName;
  private shopAddress;
  private shopPhone;
  private selectedTerritory;
  
  constructor(private appStore: AppStoreService, private router: Router) {
    this.appStore._territories.subscribe(
      val => this.territories = val
    )
   }

  ngOnInit() {
  }

  cancel(){
    this.router.navigate(['/home'])
  }

  save(){
    this.appStore.addShop(this.shopName.trim(), this.shopAddress.trim(), this.shopPhone.trim(), this.selectedTerritory);
    this.cancel();
  }


}
