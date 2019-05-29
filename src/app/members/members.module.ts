import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { MemberComponent } from './member/member.component';
import { MemberPersonalDataComponent } from './member-personal-data/member-personal-data.component';
import { MemberProfessionalDataComponent } from './member-professional-data/member-professional-data.component';
import { MemberHomeComponent } from './member-home/member-home.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { OfficeReservationComponent } from './office-reservation/office-reservation.component';
import { ReunionReservationComponent } from './reunion-reservation/reunion-reservation.component';
import { ChangeMembershipComponent } from './change-membership/change-membership.component';

@NgModule({
  declarations: [MemberComponent, MemberPersonalDataComponent, MemberProfessionalDataComponent, MemberHomeComponent, OfficeReservationComponent, ReunionReservationComponent, ChangeMembershipComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    MembersRoutingModule
  ],
  entryComponents: [
    OfficeReservationComponent,
    ReunionReservationComponent,
    ChangeMembershipComponent
  ],
})
export class MembersModule { }
