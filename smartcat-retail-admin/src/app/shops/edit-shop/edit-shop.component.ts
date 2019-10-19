import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { Shop } from 'src/app/core/model/shop';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { TerritoryService } from 'src/app/territories/territory.service';

@Component({
  selector: 'app-edit-shop',
  templateUrl: './edit-shop.component.html',
  styleUrls: ['./edit-shop.component.css', '../../shared/forms.css']
})
export class EditShopComponent implements OnInit {

  private shop: Shop;
  private selectedTerritory;
  private shopName;
  private shopPhone;
  private shopAddress;
  private territories;
  private selectedId;
  
  constructor(private shopService: ShopService, private route: ActivatedRoute, private sharedService: SharedService,
              private router: Router, private territoryService: TerritoryService) {

    this.territories = territoryService.entities$;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get('id'));
    
      this.shopService.getByKey(this.selectedId).toPromise()
          .then(res => {
            this.shop = res;
            this.shopName = this.shop.name;
            this.shopPhone = this.shop.phone;
            this.shopAddress = this.shop.address;
            this.selectedTerritory = this.shop.territory;
          })
          .catch(error => this.sharedService.home())
    });
    
  }

  save(){
    let shopCopy = JSON.parse(JSON.stringify(this.shop));
  
    shopCopy.name = this.shopName.trim();
    shopCopy.address = this.shopAddress.trim();
    shopCopy.phone = this.shopPhone.trim();
    shopCopy.territory = this.selectedTerritory;

    this.shopService.update(shopCopy);
  }

  cancel(){
    this.sharedService.home();
  }

  delete(){
    this.shopService.delete(this.shop);
      this.sharedService.home();
  }

}
