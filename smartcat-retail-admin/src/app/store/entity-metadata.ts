import { EntityMetadataMap } from '@ngrx/data';
 
const entityMetadata: EntityMetadataMap = {
  Territory: {},
  Shop: {},
  Employee: {}
};
 
// because the plural of "hero" is not "heros"
const pluralNames = { Territory: 'Territories', Shop: 'Shops', Employee: 'Employees' };
 
export const entityConfig = {
  entityMetadata,
  pluralNames
};