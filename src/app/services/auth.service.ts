import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from '../config/app.api';
import { ICredenciaisDTO } from '../models/dto/credenciais.dto';

import { StorageService } from './storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ILocalUser } from '../models/dto/localuser.Dto';

@Injectable()
export class AuthService {

    constructor(public http: HttpClient, public storage: StorageService,
        public jwtHelper: JwtHelperService) {}

    public authenticate(creds: ICredenciaisDTO) {
        return this.http.post(
            `${api}/login`,
            creds,
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    public successfulLogin(authorizationValue: string) {
        const token = authorizationValue.substring(7);
        const user: ILocalUser = {
            token: token,
            email: this.jwtHelper.decodeToken(token).sub
        };
        this.storage.setLocalUser(user);
    }

    public logout() {
        localStorage.removeItem('localUser');
    }

    public isAuthenticated(): boolean {
        const token = this.storage.getLocalUser().token;
        return !this.jwtHelper.isTokenExpired(token);
    }



}
