import { Component, OnInit, Input } from '@angular/core';
import { Shop } from 'src/app/core/model/shop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css', '../../territories/territory/territory.component.css']
})
export class ShopComponent implements OnInit {

  @Input() shop: Shop;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  editShop(shop: Shop){
    this.router.navigate([`/shop/id/${shop.id}`])
    return false;
  }

}
