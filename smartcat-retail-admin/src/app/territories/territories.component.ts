import { Component, OnInit, Input } from '@angular/core';
import { TerritoryService } from './territory.service';
import { Territory } from '../core/model/territory';


@Component({
  selector: 'app-territories',
  templateUrl: './territories.component.html',
  styleUrls: ['./territories.component.css']
})
export class TerritoriesComponent implements OnInit {

  @Input() territory: Territory;
  
  constructor() {}

  ngOnInit() {}


}
