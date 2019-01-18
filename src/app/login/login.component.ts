import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { CredenciaisDTO } from '../models/credenciais.dto';

@Component({
  selector: 'tm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public creds: CredenciaisDTO = {
    email: '',
    senha: ''
  };

  public hide = true;

  public grupoFormulario: FormGroup;

  constructor(private fb: FormBuilder, public auth: AuthService) {
  }

  ngOnInit() {
    this.grupoFormulario = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  public login() {
    this.auth.autenticate(this.creds).subscribe(response => {
      this.auth.successfulLogin(response.headers.get('Authorization'));
    });
    console.log(this.creds);
  }

}
