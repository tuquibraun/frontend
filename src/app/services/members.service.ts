import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  public url: string;
  public identity;
  public token: string;

  constructor(private _http: Http) {

    this.url = GLOBAL.url;

  }

  getUsuarios(member) {

    if (member != null) {
/*
      const params = JSON.stringify(membresia);

      const headers = new Headers({'Content-Type':'application/json'});

      return this._http.get(this.url+'login', params, {headers: headers})
                      .map(res => res.json());
      */
    } else {

      const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.getToken()
      });

      return this._http.get(this.url + 'usuarios', {headers: headers})
                      .map(res => res.json());

    }

  }

  loginUsuario(userLogin, gethash = null) {

    if (gethash != null) {

      userLogin.gethash = gethash;

    }

    const params = JSON.stringify(userLogin);

    const headers = new Headers({'Content-Type': 'application/json'});

    return this._http.post(this.url + 'login', params, {headers: headers})
                    .map(res => res.json());

  }

  registerUsuario(userRegister) {

    const params = JSON.stringify(userRegister);

    const headers = new Headers({'Content-Type': 'application/json'});

    return this._http.post(this.url + 'registrar', params, {headers: headers})
                    .map(res => res.json());

  }

  actualizarUsuario(userActualizar) {

    const params = JSON.stringify(userActualizar);

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });

    return this._http.post(this.url + 'actualizar-member/' + userActualizar._id,
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
