import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material';

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
  public dataPrevistaConclusao: string;

  public formulario: FormGroup;

  public flag = '0';

  public checked = false;

  public labelPosition = 'before';

  public disabled = false;

  public date: FormControl = new FormControl([Validators.required, Validators.pattern('dd/MM/yyyy')]);

  constructor(private formBuilder: FormBuilder) {
    console.log(this.dataPrevistaConclusao);
  }

  ngOnInit() {
    this.fomularioEdicao();
    this.prencheFormulario();
  }

  public prencheFormulario(): void {
    this.formulario.get('tarefa').setValue(this.tarefa);
    this.formulario.get('descricao').setValue(this.tarefa);
    this.date = new FormControl(new Date(this.dataPrevistaConclusao));
  }

  public editarTarefa() {
    this.flag = '1';
  }

  public salvarTarefa() {
    this.flag = '0';
  }

  public cancelar() {

  }

  private fomularioEdicao(): void {
    this.formulario = this.formBuilder.group({
      tarefa: [null, [Validators.required]],
      descricao: [null],
      data: [{value: null, disabled: true}, Validators.required]
    });
  }

}
