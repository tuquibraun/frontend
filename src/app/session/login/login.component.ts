import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/model.member';
import { MembersService } from '../../services/members.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public identity;
  public token: string;
  public member;
  public id;
  public error = null;

  constructor(public mService: MembersService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.initVars();
  }

  initVars() {
    this.member = new Member('', '', '', '', '', null, '', '');
    this.identity = this.mService.getIdentity();
    this.token = this.mService.getToken();

    this.route.queryParams
      .subscribe(params => {
        this.id = params;
      });
  }

  // FUNCION PARA LOGUEAR UN USUARIO
  public login() {

  // CONSEGUIMOS DATOS DEL USUARIO IDENTIFICADO
  this.mService.loginMember(this.member).subscribe(

    response => {

      const identity = response.usuario;
      this.identity = identity;

      if (!this.identity._id) {

        alert('El miembro no esta identificado correctamente');

      } else {

        // CREAR ELEMENTO EN LOCALSTORAGE PARA TENER AL USUARIO EN SESIÓN
        localStorage.setItem('identity', JSON.stringify(identity));

        // CONSEGUIMOS TOKEN PARA ENVIAR EN PETICIONES HTTP
        this.mService.loginMember(this.member, 'true').subscribe (

          resp => {

            const token = resp.token;
            this.token = token;

            if (this.token.length <= 0) {

              alert('El token no se ha generado correctamente');

            } else {

              // CREAR ELEMENTO EN LOCALSTORAGE PARA TENER EL TOKEN DISPONIBLE
              localStorage.setItem('token', token);
              this.member = new Member('', '', '', '', '', null, 'usuario', '');

              setTimeout(function() {
                window.location.href = 'http://localhost:4200';
              }, 500);

            }

          },
          error => {

            const errorMessage = <any>error;

            if (errorMessage != null) {

              this.error = 'La contraseña es incorrecta!';

            }
          }
        );

      }

    },
    error => {

      const errorMessage = <any>error;

      if (errorMessage != null) {

      this.error = 'El usuario no existe!';

      }

    }

  );

}

}
