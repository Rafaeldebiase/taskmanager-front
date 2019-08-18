import { Component, OnDestroy, OnInit } from '@angular/core';
import { ITarefaDto } from '../models/dto/tarefa.dto';
import { IUsuarioDto } from '../models/dto/usuario.dto';
import { AreaTrabalhoService } from '../services/area-trabalho.service';


@Component({
  selector: 'tm-area-trabalho',
  templateUrl: './area-trabalho.component.html',
  styleUrls: ['./area-trabalho.component.scss'],
})
export class AreaTrabalhoComponent implements OnInit, OnDestroy {

  public itens: ITarefaDto[] = [];

  public xUsuario: IUsuarioDto;

  constructor(private service: AreaTrabalhoService) {}

  ngOnInit() {
    this.service.getUsuarioByEmail();
    this._populaItens();
  }

  ngOnDestroy() {
    this.service.xTarefas.unsubscribe();
  }

  private _populaItens() {
    this.service.xTarefas.subscribe(item => {
      this.itens.push(... item);
    });
  }

  public insereCard(update: ITarefaDto) {
    this.itens.push(update);
    console.log(this.itens);
  }
}
