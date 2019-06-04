import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteDataComponent } from './complete-data.component';

describe('CompleteDataComponent', () => {
  let component: CompleteDataComponent;
  let fixture: ComponentFixture<CompleteDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
