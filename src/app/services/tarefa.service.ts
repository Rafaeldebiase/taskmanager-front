import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { api } from '../config/app.api';
import { ITarefaDto } from '../models/dto/tarefa.dto';
import { IUsuarioDto } from '../models/dto/usuario.dto';
import { error } from 'util';

@Injectable()
export class TarefaService {

  private usuario: IUsuarioDto;

  public tarefaPersistida: Subject<ITarefaDto> = new Subject<ITarefaDto>();

  constructor(private http: HttpClient) {}

  public getTarefasById(xUsuario: IUsuarioDto): Observable<ITarefaDto[]> {
    this.usuario = xUsuario;
    return this.http.get<ITarefaDto[]>(`${api}/tarefas/usuario=${xUsuario.id}`);
  }

  public montaTarefa(xTarefa: ITarefaDto): ITarefaDto {
    xTarefa.idUsuario = this.usuario.id.toString();
    xTarefa.email = this.usuario.email;
    xTarefa.nome = this.usuario.nome;
    xTarefa.concluido = 'false';
    return xTarefa;
  }

  public post(tarefa: ITarefaDto) {
    this.http.post<ITarefaDto>(`${api}/tarefas/`, tarefa).subscribe(data => {
      console.log('POST request successful ', data);
      this.tarefaPersistida.next(tarefa);
    },
    // tslint:disable-next-line:no-shadowed-variable
    error => {
      console.error(error);
    });
  }

  public put(tarefa: ITarefaDto) {
    this.http.put<ITarefaDto>(`${api}/tarefas/${tarefa.id}`, tarefa).subscribe(data => {
      console.log('PUT successful ', data);
    },
    // tslint:disable-next-line:no-shadowed-variable
    error => {
      console.log(error);
    });
  }

  public delete() {}
}
