import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Territory } from 'src/app/core/model/territory';
import { TerritoryService } from 'src/app/territories/territory.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Shop } from 'src/app/core/model/shop';
import { Employee } from 'src/app/core/model/employee';
import { ShopService } from 'src/app/shops/shop.service';
import { EmployeeService } from 'src/app/employees/employee.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  territories: Observable<Territory[]>;

  constructor(private territoryService: TerritoryService, private router: Router, private route: ActivatedRoute, 
    private shopService: ShopService, private employeeService: EmployeeService) {

    this.territories = territoryService.entities$;
    shopService.entities$.subscribe(res => this.getTerritories() );
    employeeService.entities$.subscribe(res => this.getTerritories() );

  }

  ngOnInit() {
    this.getTerritories();
  }
 
  add(territory: Territory) {
    this.territoryService.add(territory);
  }
 
  delete(territory: Territory) {
    this.territoryService.delete(territory.id);
  }
 
  getTerritories() {
    this.territoryService.getAll();
  }
 
  update(territory: Territory) {
    this.territoryService.update(territory);
  }

  newTerritory(){
    this.router.navigate(["/territory/new"])
    return false;
  }

  newShop(){
    this.router.navigate(["/shop/new"])
    return false;
  }

  newEmployee(){
    this.router.navigate(["/employee/new"])
    return false;
  }

}
