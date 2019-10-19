import { NgModule } from '@angular/core';
import { EntityMetadataMap, EntityDataModule, DefaultDataServiceConfig } from '@ngrx/data';
export const entityMetadata: EntityMetadataMap = {
    Territory: {},
    Shop: {},
    Employee: {}
};
 
const pluralNames = { Territory: 'Territory', Shop: 'Shop', Employee: 'Employee' };
const defaultDataServiceConfig: DefaultDataServiceConfig = {
    root: 'http://localhost:8096/',
    timeout: 3000, 
  }
 
export const entityConfig = {
  entityMetadata,
  pluralNames
};

@NgModule({
    imports: [
        EntityDataModule.forRoot({ entityMetadata: entityMetadata })
    ],
    providers: [{ provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }]
})
export class EntityStoreModule {}