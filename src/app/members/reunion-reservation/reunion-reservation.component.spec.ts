import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunionReservationComponent } from './reunion-reservation.component';

describe('ReunionReservationComponent', () => {
  let component: ReunionReservationComponent;
  let fixture: ComponentFixture<ReunionReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReunionReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReunionReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
