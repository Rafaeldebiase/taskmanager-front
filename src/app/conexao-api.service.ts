import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { api } from './config/app.api';


@Injectable({
  providedIn: 'root'
})
export class ConexaoApiService {

  constructor(private http: HttpClient) { }

  private login() {
      // this.http.post(`${api}/login`)
  }
}
