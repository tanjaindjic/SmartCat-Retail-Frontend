import { Component, OnInit } from '@angular/core';
import { AppStoreService } from 'src/app/store/app-store.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-territory',
  templateUrl: './new-territory.component.html',
  styleUrls: ['./new-territory.component.css']
})
export class NewTerritoryComponent implements OnInit {

  private cityInput;
  private postalInput;
  private countryInput; 
  constructor(public appStore: AppStoreService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
  }

  cancel(){
    this.router.navigate(['/home'])
  }

  save(){
     return this.appStore.addTerritory(this.cityInput, this.postalInput, this.countryInput);
  }

}
