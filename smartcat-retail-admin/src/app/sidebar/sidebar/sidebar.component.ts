import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Territory } from 'src/app/core/model/territory';
import { TerritoryService } from 'src/app/territories/territory.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  territories: any[];
  constructor(private territoryService: TerritoryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTerritories();
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
