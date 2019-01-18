import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from '../config/app.api';
import { CredenciaisDTO } from '../models/credenciais.dto';
import { LocalUser } from '../models/localuser';
import { StorageService } from './storage.service';


@Injectable()
export class AuthService {

    constructor(public http: HttpClient, public storage: StorageService) {}

    public autenticate(creds: CredenciaisDTO) {
        return this.http.post(
            `${api}/login`,
            creds,
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    successfulLogin(authorizationValue: string) {
        const token = authorizationValue.substring(7);
        const user: LocalUser = {
            token: token
        };
        this.storage.setLocalUser(user);
    }

    logout() {
        this.storage.setLocalUser(null);
    }
}
