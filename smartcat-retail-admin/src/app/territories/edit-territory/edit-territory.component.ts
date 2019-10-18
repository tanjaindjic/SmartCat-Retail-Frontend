import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppStoreService } from 'src/app/store/app-store.service';

@Component({
  selector: 'app-edit-territory',
  templateUrl: './edit-territory.component.html',
  styleUrls: ['./edit-territory.component.css',  '../../shared/forms.css']
})
export class EditTerritoryComponent implements OnInit {
  
  private selectedId;
  private selectedTerritory;
  private newCity;
  private newPostal;
  private newCountry;

  constructor(public appStore: AppStoreService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get('id'));
      this.selectedTerritory = this.appStore.getTerritory(this.selectedId);
      this.newCity = this.selectedTerritory.city;
      this.newPostal = this.selectedTerritory.postal;
      this.newCountry = this.selectedTerritory.country;
    })
  }

  cancel(){
    this.router.navigate(['/home'])
  }


  save(){
    this.selectedTerritory.city = this.newCity.trim();
    this.selectedTerritory.postal = this.newPostal.trim();
    this.selectedTerritory.country = this.newCountry.trim();
    this.appStore.updateTerritory(this.selectedTerritory);
  }

  delete(){
    this.appStore.removeTerritory(this.selectedId);
    this.cancel();
  }


}