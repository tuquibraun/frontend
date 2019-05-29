import { Component, OnInit, OnChanges } from '@angular/core';
import { Member } from '../../models/model.member';
import { TipoMembresia } from '../../models/modelo.membershipsTypes';
import { MembersService } from '../../services/members.service';
import { MembershipService } from '../../services/membership.service';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnChanges {


  public membershipTipes;
  public counter = 0;

  public user: Member;
  public memberAlert;
  public paymentMethods: string;
  public selectedMembership: TipoMembresia;


  constructor(
    public membersService: MembersService,
    public membershipService: MembershipService,
    public paymentSercice: PaymentService
  ) { }


  ngOnChanges() {

    if (this.membersService.isAuthenticated()) {

      window.location.href = 'http://localhost:4200';

    }

  }

  ngOnInit() {
    
    this.user = new Member(null, null, null, null, null, null, null, null);
    this.memberAlert = new Member(null, null, null, null, null, null, null, null);
    this.selectedMembership = new TipoMembresia(null, null, null);
    this.membershipService.getMembershipTypes(null).subscribe(tipos => {
        this.membershipTipes = tipos.tiposMembresias;
      });

  }

  public siguiente() {

    const member = this.user;

    let siguiente = true;

    if (this.counter === 0 ) {

      if (member.apellido == null) {

        this.memberAlert.apellido = 'error';
        siguiente = false;

      }

      if ( member.nombre == null) {

        this.memberAlert.nombre = 'error';
        siguiente = false;

      }

      if (member.email == null) {

        this.memberAlert.email = 'error';
        siguiente = false;

      }

      if (member.telefono == null) {

        this.memberAlert.telefono = 'error';
        siguiente = false;

      }

      if (this.selectedMembership.nombre == null || this.selectedMembership.nombre === 'error') {

        this.selectedMembership.nombre = 'error';
        siguiente = false;

      }

    } else if (this.counter === 1) {

      if (this.paymentMethods == null || this.paymentMethods === 'error') {

        siguiente = false;

      }

    }

    if (siguiente) {

      this.counter ++;

    }


  }


}
