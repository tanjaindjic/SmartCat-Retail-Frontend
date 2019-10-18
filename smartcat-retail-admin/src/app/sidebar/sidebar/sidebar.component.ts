import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Territory } from 'src/app/core/model/territory';
import { TerritoryService } from 'src/app/territories/territory.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppStoreService } from 'src/app/store/app-store.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  territories: Territory[];
  constructor(private territoryService: TerritoryService, private router: Router, private route: ActivatedRoute,
               private appStore: AppStoreService) {
    this.appStore._territories.subscribe(
      val => this.territories = val
    )

  }

  ngOnInit() {
    //this.getTerritories();
  }
  
  getTerritories(){
    this.territoryService.index().subscribe(
      (res: any) => this.territories = res,
      (error: any) => alert("error in sidebar")
    )
  }

  newTerritory(){
    this.router.navigate([`/territory/new`])
    return false;
  }

  cancel(){
    this.router.navigate(['/home'])
  }

}
