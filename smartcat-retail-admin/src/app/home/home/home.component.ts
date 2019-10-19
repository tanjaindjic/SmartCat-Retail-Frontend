import { Component, OnInit } from '@angular/core';
import { TerritoryService } from 'src/app/territories/territory.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private territoryService: TerritoryService) {
      territoryService.getAll();
   }

  ngOnInit() {
  }

}
