import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  public url: string;
  public identity;
  public token: string;

  constructor(private http: Http) {

    this.url = GLOBAL.url;

  }

  getMembers(member) {

    if (member != null) {
/*
      const params = JSON.stringify(membresia);

      const headers = new Headers({'Content-Type':'application/json'});

      return this.http.get(this.url+'login', params, {headers: headers})
                      .map(res => res.json());
      */
    } else {

      const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.getToken()
      });

      return this.http.get(this.url + 'usuarios', {headers: headers})
                      .map(res => res.json());

    }

  }

  loginMember(memberLogin, gethash = null) {

    if (gethash != null) {

      memberLogin.gethash = gethash;

    }

    const params = JSON.stringify(memberLogin);

    const headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.url + 'login', params, {headers: headers})
                    .map(res => res.json());

  }

  registerMember(memberRegister) {

    const params = JSON.stringify(memberRegister);

    const headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.url + 'registrar', params, {headers: headers})
                    .map(res => res.json());

  }

  updateMember(memberUpdate) {

    const params = JSON.stringify(memberUpdate);

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });

    return this.http.post(this.url + 'actualizar-usuario/' + memberUpdate._id,
    params, {headers: headers})
                    .map(res => res.json());

  }

  getIdentity() {

    const identity = JSON.parse(localStorage.getItem('identity'));

    if (identity !== 'undefined') {

      this.identity = identity;

    } else {

      this.identity = null;

    }

    return this.identity;

  }

  getToken() {

    const token = localStorage.getItem('token');

    if (token !== 'undefined') {

      this.token = token;

    } else {

      this.token = null;

    }

    return this.token;

  }

  public isAuthenticated(): boolean {

    const token = localStorage.getItem('token');

    if (token != null) {

      return true;

    } else {

      return false;

    }

  }

  isAdmin(): boolean {

    let retorno = false;

    const identity = JSON.parse(localStorage.getItem('identity'));

    if (identity !== 'undefined') {

      if (identity.rol === 'admin') {
          retorno = true;
      }

    } else {

      this.identity = null;

    }

    return retorno;

  }

}
