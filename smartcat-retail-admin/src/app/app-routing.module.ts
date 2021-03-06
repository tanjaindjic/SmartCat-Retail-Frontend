import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditTerritoryComponent } from './territories/edit-territory/edit-territory.component';
import { HomeComponent } from './home/home/home.component';
import { NewTerritoryComponent } from './territories/new-territory/new-territory.component';
import { NewShopComponent } from './shops/new-shop/new-shop.component';
import { EditShopComponent } from './shops/edit-shop/edit-shop.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { NewEmployeeComponent } from './employees/new-employee/new-employee.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'territory/new', component: NewTerritoryComponent },
  { path: 'territory/id/:id', component: EditTerritoryComponent },
  { path: 'shop/new', component: NewShopComponent },
  { path: 'shop/id/:id', component: EditShopComponent },
  { path: 'employee/new', component: NewEmployeeComponent },
  { path: 'employee/id/:id', component: EditEmployeeComponent },
  { path: '**', component: HomeComponent}
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
                                  EditEmployeeComponent,
                                  NewEmployeeComponent
                                ]
