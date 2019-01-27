import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ITarefaDto } from '../models/dto/tarefa.dto';
import { IUsuarioDto } from '../models/dto/usuario.dto';
import { StorageService } from '../services/storage.service';
import { TarefaService } from '../services/tarefa.service';
import { UsuarioService } from '../services/usuario.service';
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
    this.service.xTarefas.subscribe(itens => {
      this.itens.push(... itens);
    });
  }

  // todo
  public insereCard(update: ITarefaDto) {
    this.itens.push(update);
    console.log(this.itens);
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
