import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private router: Router) { }

  public territory;
  
  home(){
    this.router.navigate(["/home"])
  }

}
