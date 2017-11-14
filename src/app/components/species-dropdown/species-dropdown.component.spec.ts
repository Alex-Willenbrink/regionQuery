import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesDropdownComponent } from './species-dropdown.component';

describe('SpeciesDropdownComponent', () => {
  let component: SpeciesDropdownComponent;
  let fixture: ComponentFixture<SpeciesDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeciesDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
