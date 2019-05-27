import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMembershipsComponent } from './admin-memberships.component';

describe('AdminMembershipsComponent', () => {
  let component: AdminMembershipsComponent;
  let fixture: ComponentFixture<AdminMembershipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMembershipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMembershipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
