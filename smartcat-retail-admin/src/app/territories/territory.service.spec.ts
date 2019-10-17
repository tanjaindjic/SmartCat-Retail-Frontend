import { TestBed } from '@angular/core/testing';

import { TerritoryService } from './territory.service';

describe('EmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TerritoryService = TestBed.get(TerritoryService);
    expect(service).toBeTruthy();
  });
});
