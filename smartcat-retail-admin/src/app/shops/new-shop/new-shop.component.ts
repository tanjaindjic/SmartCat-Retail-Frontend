import { Component, OnInit } from '@angular/core';
import { Territory } from 'src/app/core/model/territory';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { TerritoryService } from 'src/app/territories/territory.service';
import { ShopService } from '../shop.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-shop',
  templateUrl: './new-shop.component.html',
  styleUrls: ['./new-shop.component.css', '../../shared/forms.css']
})
export class NewShopComponent implements OnInit {

  territories: Observable<Territory[]>;
  private shopName;
  private shopAddress;
  private shopPhone;
  private selectedTerritory;
  
  constructor(private router: Router, private sharedService: SharedService, private territoryService: TerritoryService,
              private shopService: ShopService) {
              this.territories = territoryService.entities$;
    
   }

  ngOnInit() {}

  cancel(){
    this.sharedService.home();
  }

  save(){
    this.shopService.add({id:null, name: this.shopName, address: this.shopAddress, phone: this.shopPhone, employees:[], 
      territory: this.selectedTerritory}).toPromise()
      .then(res => this.territoryService.getAll());
    this.sharedService.home();
  }


}
