import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTerritoryComponent } from './new-territory.component';

describe('NewTerritoryComponent', () => {
  let component: NewTerritoryComponent;
  let fixture: ComponentFixture<NewTerritoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTerritoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTerritoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
