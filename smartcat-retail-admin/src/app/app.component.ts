import { Component } from '@angular/core';
import { TerritoryStoreService } from './store/territory-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world'
  public name = "tanjo"
  constructor(public territoriesStore: TerritoryStoreService) {}
}

