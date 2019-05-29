import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {
  public url: string;

  constructor(private _http: Http) {

    this.url = GLOBAL.url;

  }

  getMembershipTypes(membership) {

    if (membership != null) {
/*
      let params = JSON.stringify(membership);

      let headers = new Headers({'Content-Type':'application/json'});

      return this._http.get(this.url+'login', params, {headers: headers})
                      .map(res => res.json());
      */
    } else {

      const headers = new Headers({'Content-Type': 'application/json'});

      return this._http.get(this.url + 'tipos-membership', {headers: headers})
                      .map(res => res.json());

    }


  }

}
