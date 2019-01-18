import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'tm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  public tarefa: string;

  @Input()
  public descricao: string;

  public formulario: FormGroup;

  public flag = '0';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.fomularioEdicao();
    this.prencheFormulario();
  }

  public prencheFormulario(): void {
    this.formulario.get('tarefa').setValue(this.tarefa);
    this.formulario.get('descricao').setValue(this.tarefa);
  }

  public editarTarefa(): void {
    this.flag = '1';
  }

  public salvarTarefa(): void {
    this.flag = '0';
  }

  private fomularioEdicao(): void {
    this.formulario = this.formBuilder.group({
      tarefa: [null, [Validators.required]],
      descricao: [null]
    });
  }

}
