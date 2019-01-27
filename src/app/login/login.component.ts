import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { ICredenciaisDTO } from '../models/dto/credenciais.dto';
import { Router } from '@angular/router';


@Component({
  selector: 'tm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  public creds: ICredenciaisDTO = {
    email: '',
    senha: ''
  };

  public hide = true;

  public grupoFormulario: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router ) {
  }

  ngOnInit() {
    this.iniciaFormulario();
  }

  private iniciaFormulario() {
    this.grupoFormulario = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  public login() {
    this.creds.senha = this.grupoFormulario.get('senha').value;
    this.auth.authenticate(this.creds).subscribe( response => {
      this.auth.successfulLogin(response.headers.get('Authorization'));
      this.router.navigate(['areaTrabalho']);
    });
  }

}
