import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberPersonalDataComponent } from './member-personal-data.component';

describe('MemberPersonalDataComponent', () => {
  let component: MemberPersonalDataComponent;
  let fixture: ComponentFixture<MemberPersonalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberPersonalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberPersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
