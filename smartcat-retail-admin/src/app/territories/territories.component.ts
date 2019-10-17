import { Component, OnInit } from '@angular/core';
import { TerritoryService } from './territory.service';


@Component({
  selector: 'app-territories',
  templateUrl: './territories.component.html',
  styleUrls: ['./territories.component.css']
})
export class TerritoriesComponent implements OnInit {

  public territories = []
  public errorMsg
  constructor(private _territoryService: TerritoryService) { }

  ngOnInit() {
    this._territoryService.getTerritories()
        .subscribe(data => this.territories = data,
                    error => this.errorMsg = error)
  }

}
