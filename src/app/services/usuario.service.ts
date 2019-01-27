import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { api } from '../config/app.api';
import { Observable } from 'rxjs';
import { IUsuarioDto } from '../models/dto/usuario.dto';



@Injectable()
export class UsuarioService {

    constructor(private http: HttpClient) {}

    public getUsuarioByemail(email: string): Observable<IUsuarioDto> {
        return this.http.get<IUsuarioDto>(`${api}/usuarios/email=${email}`);
    }

}
