import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material';
import { ITarefaDto } from 'src/app/models/dto/tarefa.dto';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'tm-criatarefa',
  templateUrl: './criatarefa.component.html',
  styleUrls: ['./criatarefa.component.scss']
})
export class CriatarefaComponent implements OnInit {

  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;

  @Output()
  public tarefa: EventEmitter<ITarefaDto> = new EventEmitter();

  public formulario: FormGroup;

  public date: FormControl = new FormControl([Validators.required]);

  constructor(private formBuilder: FormBuilder,
    private service: TarefaService) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      titulo: [null, [Validators.required, Validators.maxLength(100)]],
      descricao: [null]
    });
  }

  public adicionaTarefa() {
    const xTarefa: ITarefaDto = {
      titulo: this.formulario.get('titulo').value,
      descricao: this.formulario.get('descricao').value,
      dataPrevisaoConclusao: this.date.value
    };
    const tarefaMontada: ITarefaDto = this.service.montaTarefa(xTarefa);
    this.service.post(tarefaMontada);
    this.service.tarefaPersistida.subscribe(tarefa => {
      this.tarefa.emit(tarefa);
      this.limpaCampos();
    });
  }

  public limpaCampos() {
    this.formulario.get('titulo').setValue(null);
    this.formulario.get('descricao').setValue(null);
    this.date.setValue(null);
  }

}
