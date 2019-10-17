import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerritoryComponent } from './territories/territory.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  // { path: 'territory', component: TerritoryComponent },
  // { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TerritoryComponent, 
                                  PageNotFoundComponent]
