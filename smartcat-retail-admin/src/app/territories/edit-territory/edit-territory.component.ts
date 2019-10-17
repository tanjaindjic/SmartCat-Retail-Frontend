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

  constructor(public appStore: AppStoreService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get('id'));
      this.selectedTerritory = this.appStore.getTerritory(this.selectedId);
    })
  }

  cancel(){
    this.router.navigate(['/home'])
  }

  save(){
    this.appStore.addTerritory
  }


}
