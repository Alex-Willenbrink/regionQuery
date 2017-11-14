import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplementCheckboxComponent } from './complement-checkbox.component';

describe('ComplementCheckboxComponent', () => {
  let component: ComplementCheckboxComponent;
  let fixture: ComponentFixture<ComplementCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplementCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplementCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
