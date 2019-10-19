import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TerritoryService } from '../territory.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-new-territory',
  templateUrl: './new-territory.component.html',
  styleUrls: ['./new-territory.component.css',  '../../shared/forms.css']
})
export class NewTerritoryComponent implements OnInit {

  private cityInput = "";
  private postalInput = "";
  private countryInput = ""; 
  
  constructor(private territoryService: TerritoryService, private router: Router, private route: ActivatedRoute ,
              private sharedService: SharedService) { }


  ngOnInit() {
  }

  cancel(){
    this.sharedService.home();
  }

  save(){
    let payload = {
      id:null, 
      city: this.cityInput.trim(), 
      postal: this.postalInput.trim(), 
      country: this.countryInput.trim(), 
      shops:[]
    }
    
    this.territoryService.add(payload);
    this.sharedService.home();
  }

}
