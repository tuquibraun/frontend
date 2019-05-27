import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { AuthGuard } from '../guards/auth.guard';
import { MemberHomeComponent } from './member-home/member-home.component';
import { MemberPersonalDataComponent } from './member-personal-data/member-personal-data.component';
import { MemberProfessionalDataComponent } from './member-professional-data/member-professional-data.component';

const routes: Routes = [
  {
    path: '',
    component: MemberComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: MemberHomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'home',
        component: MemberHomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'personal-data',
        component: MemberPersonalDataComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'professional-data',
        component: MemberProfessionalDataComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
