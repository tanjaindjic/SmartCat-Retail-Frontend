import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerritoriesComponent } from './territories/territories.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full'},
  { path: 'territory', component: TerritoriesComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TerritoriesComponent, 
                                  PageNotFoundComponent]
