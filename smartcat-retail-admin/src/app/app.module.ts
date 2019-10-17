import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './store/entity-metadata';
import { reducers, metaReducers } from './reducers';
import { AppEffects } from './app.effects';
import { EmployeeComponent } from './employees/employee/employee.component';
import { ShopComponent } from './shops/shop/shop.component';
import { TerritoryComponent } from './territories/territory/territory.component';
import { HomeComponent } from './home/home/home.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { NewTerritoryComponent } from './territories/new-territory/new-territory.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ShopComponent,
    EmployeeComponent, 
    TerritoryComponent, HomeComponent, SidebarComponent, NewTerritoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([AppEffects]),
    EntityDataModule.forRoot(entityConfig),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
