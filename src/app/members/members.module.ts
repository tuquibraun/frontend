import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { MemberComponent } from './member/member.component';
import { MemberPersonalDataComponent } from './member-personal-data/member-personal-data.component';
import { MemberProfessionalDataComponent } from './member-professional-data/member-professional-data.component';
import { MemberHomeComponent } from './member-home/member-home.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MemberComponent, MemberPersonalDataComponent, MemberProfessionalDataComponent, MemberHomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    MembersRoutingModule
  ]
})
export class MembersModule { }
