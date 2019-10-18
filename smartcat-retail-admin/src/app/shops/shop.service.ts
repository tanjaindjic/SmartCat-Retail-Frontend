import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shop } from '../core/model/shop';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  public API_ENDPOINT = "http://localhost:8096/shop"

  constructor(private http: HttpClient) { }

  getShop(id: number) {
    return this.http.get<Shop>(this.API_ENDPOINT  + "/" + id);
  }

  getShops() {
    return this.http.get<Shop[]>(this.API_ENDPOINT);
  }

  create(shop: Shop, id: number) {
     return this.http.post(this.API_ENDPOINT, {shop: shop, territoryId: id});
  }

  update(shop: Shop, id: number) {
    return this.http.put<Shop>(this.API_ENDPOINT + "/" + shop.id, {shop: shop, territoryId: id});
  }

  remove(id: number) {
    return this.http.delete(this.API_ENDPOINT + "/" + id);
  }
}
