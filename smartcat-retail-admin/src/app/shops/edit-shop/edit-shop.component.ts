import { Component, OnInit } from '@angular/core';
import { AppStoreService } from 'src/app/store/app-store.service';
import { ShopService } from '../shop.service';
import { Shop } from 'src/app/core/model/shop';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-edit-shop',
  templateUrl: './edit-shop.component.html',
  styleUrls: ['./edit-shop.component.css', '../../territories/edit-territory/edit-territory.component.css']
})
export class EditShopComponent implements OnInit {

  shop: Shop;
  selectedId;
  selectedTerritory;
  shopName;
  shopPhone;
  shopAddress;
  territories;
  constructor(private appStore: AppStoreService, private shopService: ShopService, private route: ActivatedRoute, 
              private router: Router) {
    this.appStore._territories.subscribe(
      val => this.territories = val
    )
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get('id'));
      this.shopService.getShop(this.selectedId).subscribe(
      (res: any) => {
        this.shop = res.shop;
        this.shopName = this.shop.name;
        this.shopAddress = this.shop.address;
        this.shopPhone = this.shop.phone;
        this.selectedTerritory = res.territoryId;
      },
      (error: any) => alert("error in edit-shop"))
    })
    
  }

  save(){
    this.shop.name = this.shopName;
    this.shop.address = this.shopAddress;
    this.shop.phone = this.shopPhone;
    this.appStore.updateShop( this.shop, this.selectedTerritory);
  }

  cancel(){
    this.router.navigate(['/home'])
  }

  delete(){
    this.appStore.removeShop( this.shop.id);
    this.cancel();
  }

}
