import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IDado } from 'src/app/interface/dado';

@Component({
  selector: 'tm-criatarefa',
  templateUrl: './criatarefa.component.html',
  styleUrls: ['./criatarefa.component.scss']
})
export class CriatarefaComponent implements OnInit {

  @Output()
  public tarefa: EventEmitter<IDado> = new EventEmitter();

  public formulario: FormGroup;

  public xTarefa: IDado;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      tarefa: [null, [Validators.required, Validators.maxLength(100)]],
      descricao: [null]
    });
  }

  public adicionaTarefa() {
    this.xTarefa = {
      tarefa: this.formulario.get('tarefa').value,
      descricao: this.formulario.get('descricao').value
    };

    this.tarefa.emit(this.xTarefa);

    this.limpaCampos();
  }

  public limpaCampos() {
    this.formulario.get('tarefa').setValue(null);
    this.formulario.get('descricao').setValue(null);
  }

}
