import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { StorageService } from './storage.service';
import { TarefaService } from './tarefa.service';
import { IUsuarioDto } from '../models/dto/usuario.dto';
import { ITarefaDto } from '../models/dto/tarefa.dto';
import { Subject } from 'rxjs';


@Injectable()
export class AreaTrabalhoService {

    public xTarefas: Subject<ITarefaDto[]> = new Subject<ITarefaDto[]>();

    constructor(private usuarioService: UsuarioService,
        private storageService: StorageService,
        private tarefaService: TarefaService) {}

    public getUsuarioByEmail() {
        const email: string = this.storageService.getLocalUser().email;
        this.usuarioService.getUsuarioByemail(email).subscribe(
        response => {
            this.getTarefasByID(response);
        },
        error => {
            console.log(error);
        }
        );
    }
    public getTarefasByID(xUsuario: IUsuarioDto) {
        this.tarefaService.getTarefasById(xUsuario).subscribe(response => {
            this.xTarefas.next(response);
        });
    }
}
