import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../services/members.service';
import { OfficeReservationComponent } from '../office-reservation/office-reservation.component';
import { MatDialog } from '@angular/material';
import { ReunionReservationComponent } from '../reunion-reservation/reunion-reservation.component';
import { ChangeMembershipComponent } from '../change-membership/change-membership.component';
import { MembershipService } from '../../services/membership.service';

@Component({
  selector: 'app-member-home',
  templateUrl: './member-home.component.html',
  styleUrls: ['./member-home.component.css']
})
export class MemberHomeComponent implements OnInit {

  public identity;
  public token: string;
  public membership;

  constructor( public membersService: MembersService,
               public membershipService: MembershipService,
               public dialog: MatDialog) { }

  ngOnInit() {
    this.identity = this.membersService.getIdentity();
    this.token = this.membersService.getToken();
    this.membership = this.membershipService.getMembershipTypes(this.identity);
  }

  openChangeMembership() {
    const dialogRef = this.dialog.open(ChangeMembershipComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  openDialogOffice() {
    const dialogRef = this.dialog.open(OfficeReservationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  openDialogReunion() {
    const dialogRef = this.dialog.open(ReunionReservationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }S
}
