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
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { EntityStoreModule } from './store/app-store.module';
import { EmailValidatorDirective } from './shared/validators/email-validator.directive';
import { AlphabetValidatorDirective } from './shared/validators/alphabet-validator.directive';
import { AlphanumericValidatorDirective } from './shared/validators/alphanumeric-validator.directive';
import { AddressValidatorDirective } from './shared/validators/address-validator.directive';
import { PhoneValidatorDirective } from './shared/validators/phone-validator.directive';
import { EmptyValidatorDirective } from './shared/validators/empty-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ShopComponent,
    EmployeeComponent, 
    TerritoryComponent, 
    SidebarComponent,
    EmailValidatorDirective, 
    AlphabetValidatorDirective, 
    AlphanumericValidatorDirective, 
    AddressValidatorDirective, 
    PhoneValidatorDirective, 
    EmptyValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([AppEffects]),
    EntityDataModule.forRoot(entityConfig),
    EntityStoreModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
