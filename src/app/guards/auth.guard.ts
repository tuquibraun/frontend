import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MembersService } from '../services/members.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private membersservice: MembersService, public router: Router) {}

  canActivate() {

    if (!this.membersservice.isAuthenticated()) {

      this.router.navigate(['login']);
      return false;
    }

    return true;

  }

}
