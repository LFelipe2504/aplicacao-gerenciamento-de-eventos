import { Component,EventEmitter,Input, OnInit, Output  } from '@angular/core';

import { Funcionario } from './../../../interfaces/Funcionario';

import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario-funcionarios',
  templateUrl: './formulario-funcionarios.component.html',
  styleUrls: ['./formulario-funcionarios.component.css']
})
export class FormularioFuncionariosComponent implements OnInit {

 @Output() onSubmit = new EventEmitter<Funcionario>();
 @Input() btnText!: string;
 @Input() funcionarioData: Funcionario | null = null;

 fornecedorForm!: FormGroup;


 constructor() {}

 ngOnInit(): void {
  this.fornecedorForm = new FormGroup({
    nome: new FormControl(this.funcionarioData ? this.funcionarioData.nome : '', [Validators.required]),
    foto: new FormControl(this.funcionarioData ? this.funcionarioData.foto : '', [Validators.required]),
    idade: new FormControl(this.funcionarioData ? this.funcionarioData.idade : '', [Validators.required]),
    cargo: new FormControl(this.funcionarioData ? this.funcionarioData.cargo : '', [Validators.required]),
    naturalidade: new FormControl(this.funcionarioData ? this.funcionarioData.naturalidade : '', [Validators.required]),
    anoAdmissao: new FormControl(this.funcionarioData ? this.funcionarioData.anoAdmissao : '', [Validators.required]),
    hobbie: new FormControl(this.funcionarioData ? this.funcionarioData.hobbie : '', [Validators.required]),
  });
 }

 get nome() {
  return this.fornecedorForm.get('nome')!;
 }

 get foto() {
  return this.fornecedorForm.get('foto')!;
 }

 get idade() {
  return this.fornecedorForm.get('idade')!;
 }

 get cargo() {
  return this.fornecedorForm.get('cargo')!;
 }

 get naturalidade() {
  return this.fornecedorForm.get('naturalidade')!;
 }

 get anoAdmissao() {
  return this.fornecedorForm.get('anoAdmissao')!;
 }

 get hobbie() {
  return this.fornecedorForm.get('hobbie')!;
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
