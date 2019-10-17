import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerritoryComponent } from './territories/territory/territory.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditTerritoryComponent } from './territories/edit-territory/edit-territory.component';
import { HomeComponent } from './home/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'territory/:id', component: EditTerritoryComponent }
  // { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EditTerritoryComponent, 
                                  PageNotFoundComponent]
