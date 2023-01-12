import { Component,EventEmitter,Input, OnInit, Output  } from '@angular/core';


import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Bebida } from 'src/app/interfaces/Bebida';

@Component({
  selector: 'app-formulario-bebidas',
  templateUrl: './formulario-bebidas.component.html',
  styleUrls: ['./formulario-bebidas.component.css']
})
export class FormularioBebidasComponent  implements OnInit{
  @Output() onSubmit = new EventEmitter<Bebida>();
  @Input() btnText!: string;
  @Input() bebidaData: Bebida | null = null;

  bebidaForm!: FormGroup;


  constructor() {}

  ngOnInit(): void {
   this.bebidaForm = new FormGroup({
     nome: new FormControl(this.bebidaData ? this.bebidaData.nome : '', [Validators.required]),
     foto: new FormControl(this.bebidaData ? this.bebidaData.foto : ''),
     descricao: new FormControl(this.bebidaData ? this.bebidaData.descricao : '', [Validators.required]),
     preco: new FormControl(this.bebidaData ? this.bebidaData.preco : '', [Validators.required]),
   });
  }

  get nome() {
   return this.bebidaForm.get('nome')!;
  }

  get descricao() {
   return this.bebidaForm.get('descricao')!;
  }

  get foto() {
   return this.bebidaForm.get('foto')!;
  }

  get preco() {
    return this.bebidaForm.get('preco')!;
   }

  submit() {
   if(this.bebidaForm.invalid){
     return;
   }
   console.log(this.bebidaForm.value)

   this.onSubmit.emit(this.bebidaForm.value);

   this.reloadPag();
  }

  reloadPag(){
    if(this.btnText === 'Enviar'){
     window.location.reload();
    }
  }
}
