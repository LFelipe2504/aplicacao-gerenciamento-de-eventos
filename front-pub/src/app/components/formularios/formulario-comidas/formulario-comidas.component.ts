import { Component,EventEmitter,Input, OnInit, Output  } from '@angular/core';


import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Comida } from 'src/app/interfaces/Comida';

@Component({
  selector: 'app-formulario-comidas',
  templateUrl: './formulario-comidas.component.html',
  styleUrls: ['./formulario-comidas.component.css']
})
export class FormularioComidasComponent  implements OnInit{
  @Output() onSubmit = new EventEmitter<Comida>();
  @Input() btnText!: string;
  @Input() comidaData: Comida | null = null;

  comidaForm!: FormGroup;


  constructor() {}

  ngOnInit(): void {
   this.comidaForm = new FormGroup({
     nome: new FormControl(this.comidaData ? this.comidaData.nome : '', [Validators.required]),
     foto: new FormControl(this.comidaData ? this.comidaData.foto : ''),
     descricao: new FormControl(this.comidaData ? this.comidaData.descricao : '', [Validators.required]),
     preco: new FormControl(this.comidaData ? this.comidaData.preco : '', [Validators.required]),
   });
  }

  get nome() {
   return this.comidaForm.get('nome')!;
  }

  get descricao() {
   return this.comidaForm.get('descricao')!;
  }

  get foto() {
   return this.comidaForm.get('foto')!;
  }

  get preco() {
    return this.comidaForm.get('preco')!;
   }

  submit() {
   if(this.comidaForm.invalid){
     return;
   }
   console.log(this.comidaForm.value)

   this.onSubmit.emit(this.comidaForm.value);

   this.reloadPag();
  }

  reloadPag(){
    if(this.btnText === 'Enviar'){
     window.location.reload();
    }
  }
}
