import { Component, OnInit } from '@angular/core';
import { AppStoreService } from 'src/app/store/app-store.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-territory',
  templateUrl: './new-territory.component.html',
  styleUrls: ['./new-territory.component.css',  '../../shared/forms.css']
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
    this.appStore.addTerritory(this.cityInput.trim(), this.postalInput.trim(), this.countryInput.trim());
    this.cancel();
  }

}
