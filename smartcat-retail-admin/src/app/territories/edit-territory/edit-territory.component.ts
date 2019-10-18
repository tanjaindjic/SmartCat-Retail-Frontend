import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppStoreService } from 'src/app/store/app-store.service';

@Component({
  selector: 'app-edit-territory',
  templateUrl: './edit-territory.component.html',
  styleUrls: ['./edit-territory.component.css']
})
export class EditTerritoryComponent implements OnInit {
  public selectedId;
  public selectedTerritory;
  public newCity = "";
  public newPostal = "";
  public newCountry = "";
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
  onClickSubmit(formData) {
    alert(JSON.stringify(formData));
    this.selectedTerritory.city = formData.city;
    this.selectedTerritory.postal = formData.postal;
    this.selectedTerritory.country = formData.country;
    this.appStore.updateTerritory(this.selectedTerritory);
  }

  save(){
    this.selectedTerritory.city = this.newCity;
    this.selectedTerritory.postal = this.newPostal;
    this.selectedTerritory.country = this.newCountry;
    this.appStore.updateTerritory(this.selectedTerritory);
  }

  delete(){
    this.appStore.removeTerritory(this.selectedId);
    this.cancel();
  }


}
