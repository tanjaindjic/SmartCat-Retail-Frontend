import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerritoryComponent } from './territories/territory/territory.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditTerritoryComponent } from './territories/edit-territory/edit-territory.component';
import { HomeComponent } from './home/home/home.component';
import { NewTerritoryComponent } from './territories/new-territory/new-territory.component';
import { NewShopComponent } from './shops/new-shop/new-shop.component';
import { EditShopComponent } from './shops/edit-shop/edit-shop.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'territory/new', component: NewTerritoryComponent },
  { path: 'territory/id/:id', component: EditTerritoryComponent },
  { path: 'shop/new', component: NewShopComponent },
  { path: 'shop/id/:id', component: EditShopComponent }
  // { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,
                                  NewTerritoryComponent,
                                  EditTerritoryComponent,
                                  NewShopComponent,
                                  EditShopComponent, 
                                  PageNotFoundComponent]
