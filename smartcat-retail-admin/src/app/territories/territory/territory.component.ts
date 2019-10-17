import { Component, OnInit, Input } from '@angular/core';
import { Territory } from '../../core/model/territory';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-territory',
  templateUrl: './territory.component.html',
  styleUrls: ['./territory.component.css']
})
export class TerritoryComponent implements OnInit {

  @Input() territory: Territory;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  editTerritory(t: Territory) {
    this.router.navigate([`/territory/id/${t.id}`])
    return false;
  }

  cancel(){
    this.router.navigate(['/home'])
  }
}
