import { Component, OnInit, Input } from '@angular/core';
import { Territory } from '../../core/model/territory';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';


@Component({
  selector: 'app-territory',
  templateUrl: './territory.component.html',
  styleUrls: ['./territory.component.css']
})
export class TerritoryComponent implements OnInit {

  @Input() territory: Territory;

  constructor(private router: Router, private route: ActivatedRoute, private sharedService: SharedService) {}

  ngOnInit() {}

  editTerritory(t: Territory) {
    this.sharedService.territory = t;
    this.router.navigate([`/territory/id/${t.id}`])
    return false;
  }

  cancel(){
    this.sharedService.home();
  }
}
