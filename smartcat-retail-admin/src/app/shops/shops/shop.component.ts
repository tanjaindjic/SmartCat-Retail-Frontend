import { Component, OnInit, Input } from '@angular/core';
import { Shop } from 'src/app/core/model/shop';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  @Input() shop: Shop;

  constructor() { }

  ngOnInit() {
  }

}
