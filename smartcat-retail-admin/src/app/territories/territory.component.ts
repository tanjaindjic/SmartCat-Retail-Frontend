import { Component, OnInit, Input } from '@angular/core';
import { TerritoryService } from './territory.service';
import { Territory } from '../core/model/territory';


@Component({
  selector: 'app-territory',
  templateUrl: './territory.component.html',
  styleUrls: ['./territory.component.css']
})
export class TerritoryComponent implements OnInit {

  @Input() territory: Territory;
  
  constructor() {}

  ngOnInit() {}


}
