import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material';
import { ITarefaDto } from 'src/app/models/dto/tarefa.dto';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'tm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;

  @Input()
  public tarefa: string;

  @Input()
  public descricao: string;

  @Input()
  public status: string;

  @Input()
  public dataPrevisaoConclusao: string;

  @Input()
  public id: string;

  public formulario: FormGroup;

  public flag = '0';

  public checked = false;

  public labelPosition = 'before';

  public disabled = false;

  public date: FormControl = new FormControl();

  constructor(private formBuilder: FormBuilder, private service: TarefaService) {
  }

  ngOnInit() {
    this._fomularioEdicao();
    this._prencheFormulario();
    this._ehConcluido();
  }

  public editarTarefa() {
    this.flag = '1';
    this.date = new FormControl((new Date(this.dataPrevisaoConclusao)).toISOString());
  }

  public salvarTarefa() {
    const xTarefa: ITarefaDto = {
      id: this.id,
      titulo: this.formulario.get('tarefa').value,
      descricao: this.formulario.get('descricao').value,
    };
    const tarefaMontada = this.service.montaTarefa(xTarefa);
    this.flag = '0';
  }

  public cancelar() {
    this.flag = '0';
  }

  private _fomularioEdicao(): void {
    this.formulario = this.formBuilder.group({
      tarefa: [null, [Validators.required]],
      descricao: [null]
    });
  }

  private _prencheFormulario(): void {
    this.formulario.get('tarefa').setValue(this.tarefa);
    this.formulario.get('descricao').setValue(this.descricao);
  }

  private _ehConcluido() {
    console.log(this.checked);
  }

}
