import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { api } from '../config/app.api';
import { ITarefaDto } from '../models/dto/tarefa.dto';
import { IUsuarioDto } from '../models/dto/usuario.dto';

@Injectable()
export class TarefaService {

  private usuario: IUsuarioDto;

  public tarefaPersistida: Subject<ITarefaDto> = new Subject<ITarefaDto>();

  constructor(private http: HttpClient) {}

  public getTarefasById(xUsuario: IUsuarioDto): Observable<ITarefaDto[]> {
    this.usuario = xUsuario;
    return this.http.get<ITarefaDto[]>(`${api}/tarefas/usuario=${xUsuario.id}`);
  }

  public montaTarefa(xTarefa: ITarefaDto) {
    xTarefa.idUsuario = this.usuario.id.toString();
    xTarefa.email = this.usuario.email;
    xTarefa.nome = this.usuario.nome;
    xTarefa.concluido = 'false';
    this.post(xTarefa);
  }

  public post(tarefa: ITarefaDto) {
    this.http.post<ITarefaDto>(`${api}/tarefas/`, tarefa).subscribe(data => {
      console.log('POST request successful ', data);
      this.tarefaPersistida.next(tarefa);
    },
    error => {
      console.error(error);
    });
  }

  public put() {
    //   return this.http.put(`${api}/tarefas/${id}`, )
    //   "concluido": "false" ,
    //  "dataPrevisaoEntrega": "2019-02-22T22:10:20.317Z",
    // "descricao": "ola",
    // "email": "rafael@teste.com",
    // "nome": "rafael",
    // "titulo": "teste"
  }

  public delete() {}
}
