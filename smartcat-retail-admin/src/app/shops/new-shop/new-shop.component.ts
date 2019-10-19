import { Component, OnInit, ViewChild } from '@angular/core';
import { Territory } from 'src/app/core/model/territory';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { TerritoryService } from 'src/app/territories/territory.service';
import { ShopService } from '../shop.service';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-shop',
  templateUrl: './new-shop.component.html',
  styleUrls: ['./new-shop.component.css', '../../shared/forms.css']
})
export class NewShopComponent implements OnInit {

  @ViewChild('newShopForm', {static: false}) form: FormGroup; 

  territories: Observable<Territory[]>;
  private shopName = "";
  private shopAddress = "";
  private shopPhone = "";
  private selectedTerritory;

  constructor(private sharedService: SharedService, private territoryService: TerritoryService, private shopService: ShopService) {

    this.territories = territoryService.entities$;  
   }

  ngOnInit() {}

  cancel(){
    this.sharedService.home();
  }

  save(){
    let payload = {
      id: null, 
      name: this.shopName.trim(), 
      address: (this.shopAddress) ? this.shopAddress.trim() : "", 
      phone: (this.shopPhone) ? this.shopPhone.trim() : "", 
      employees:[], 
      territory: this.selectedTerritory
    }

    this.shopService.add(payload);
    this.form.reset();
  }


}
