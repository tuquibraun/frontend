import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberProfessionalDataComponent } from './member-professional-data.component';

describe('MemberProfessionalDataComponent', () => {
  let component: MemberProfessionalDataComponent;
  let fixture: ComponentFixture<MemberProfessionalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberProfessionalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberProfessionalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
