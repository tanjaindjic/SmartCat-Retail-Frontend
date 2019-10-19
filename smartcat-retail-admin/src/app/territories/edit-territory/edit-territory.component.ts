import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TerritoryService } from '../territory.service';
import { Territory } from 'src/app/core/model/territory';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-edit-territory',
  templateUrl: './edit-territory.component.html',
  styleUrls: ['./edit-territory.component.css',  '../../shared/forms.css']
})
export class EditTerritoryComponent implements OnInit {
  
  private selectedTerritory: Territory;
  private newCity;
  private newPostal;
  private newCountry;

  constructor(private sharedService: SharedService, private router: Router, private route: ActivatedRoute, 
              private territoryService: TerritoryService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedTerritory = this.sharedService.territory;
      if(this.selectedTerritory === undefined)
        this.sharedService.home();
        
      this.sharedService.territory = undefined;
      this.newCity = this.selectedTerritory.city;
      this.newPostal = this.selectedTerritory.postal;
      this.newCountry = this.selectedTerritory.country;
    })
  }

  cancel(){
    this.sharedService.home();
  }

  save(){
    let territoryCopy = JSON.parse(JSON.stringify(this.selectedTerritory));
  
    territoryCopy.city = this.newCity.trim();
    territoryCopy.postal = this.newPostal.trim();
    territoryCopy.country = this.newCountry.trim();
    this.territoryService.update(territoryCopy);
  }

  delete(){
    this.territoryService.delete(this.selectedTerritory);
    this.sharedService.home();
  }


}
