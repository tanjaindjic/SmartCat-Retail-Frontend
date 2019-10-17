import { Component } from '@angular/core';
import { AppStoreService } from './store/app-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public appStore: AppStoreService) {}
}

