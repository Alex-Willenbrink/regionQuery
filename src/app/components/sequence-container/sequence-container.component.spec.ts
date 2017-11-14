import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenceContainerComponent } from './sequence-container.component';

describe('SequenceContainerComponent', () => {
  let component: SequenceContainerComponent;
  let fixture: ComponentFixture<SequenceContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequenceContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
