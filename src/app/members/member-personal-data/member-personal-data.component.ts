import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../services/members.service';

@Component({
  selector: 'app-member-personal-data',
  templateUrl: './member-personal-data.component.html',
  styleUrls: ['./member-personal-data.component.css']
})
export class MemberPersonalDataComponent implements OnInit {

  public identity;
  public token: string;

  constructor( public membersService: MembersService ) { }

  ngOnInit() {
    
    this.identity = this.membersService.getIdentity();
    this.token = this.membersService.getToken();

  }

  modificarDatos(){
    
  }
}
