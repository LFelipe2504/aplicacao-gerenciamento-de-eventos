import { Component,EventEmitter,Input, OnInit, Output  } from '@angular/core';


import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Fornecedor } from '../../../interfaces/Fornecedor';

@Component({
  selector: 'app-formulario-fornecedores',
  templateUrl: './formulario-fornecedores.component.html',
  styleUrls: ['./formulario-fornecedores.component.css']
})
export class FormularioFornecedoresComponent implements OnInit{
 @Output() onSubmit = new EventEmitter<Fornecedor>();
 @Input() btnText!: string;
 @Input() fornecedorData: Fornecedor | null = null;

 fornecedorForm!: FormGroup;


 constructor() {}

 ngOnInit(): void {
  this.fornecedorForm = new FormGroup({
    nome: new FormControl(this.fornecedorData ? this.fornecedorData.nome : '', [Validators.required]),
    descricao: new FormControl(this.fornecedorData ? this.fornecedorData.descricao : '', [Validators.required]),
    foto: new FormControl(this.fornecedorData ? this.fornecedorData.foto : ''),
  });
 }

 get nome() {
  return this.fornecedorForm.get('nome')!;
 }

 get descricao() {
  return this.fornecedorForm.get('descricao')!;
 }

 get foto() {
  return this.fornecedorForm.get('foto')!;
 }

 submit() {
  if(this.fornecedorForm.invalid){
    return;
  }
  console.log(this.fornecedorForm.value)

  this.onSubmit.emit(this.fornecedorForm.value);

  this.reloadPag();
 }

 reloadPag(){
   if(this.btnText === 'Enviar'){
    window.location.reload();
   }
 }

}
