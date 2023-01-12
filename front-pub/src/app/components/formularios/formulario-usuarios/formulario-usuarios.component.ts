import { Component,EventEmitter,Input, OnInit, Output  } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Usuario } from 'src/app/interfaces/Usuario';

@Component({
  selector: 'app-formulario-usuarios',
  templateUrl: './formulario-usuarios.component.html',
  styleUrls: ['./formulario-usuarios.component.css']
})
export class FormularioUsuariosComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<Usuario>();
  @Input() btnText!: string;
  @Input() usuarioData: Usuario | null = null;

  usuarioForm!: FormGroup;


  constructor() {}

  ngOnInit(): void {
   this.usuarioForm = new FormGroup({
     nome: new FormControl(this.usuarioData ? this.usuarioData.nome : '', [Validators.required]),
     cpf: new FormControl(this.usuarioData ? this.usuarioData.cpf : '', [Validators.required]),
     telefone: new FormControl(this.usuarioData ? this.usuarioData.telefone : ''),
     email: new FormControl(this.usuarioData ? this.usuarioData.email : '', [Validators.required]),
     senha: new FormControl(this.usuarioData ? '' : '', [Validators.required]),
   });
  }

  get nome() {
   return this.usuarioForm.get('nome')!;
  }

  get cpf() {
   return this.usuarioForm.get('cpf')!;
  }

  get telefone() {
   return this.usuarioForm.get('telefone')!;
  }

  get email() {
    return this.usuarioForm.get('email')!;
  }

  get senha() {
  return this.usuarioForm.get('senha')!;
  }
  
  submit() {    
   if(this.usuarioForm.invalid){
     return;
   }
   console.log(this.usuarioForm.value)

   this.onSubmit.emit(this.usuarioForm.value);

   this.reloadPag();
  }

  reloadPag(){
    if(this.btnText === 'Enviar'){
     window.location.reload();
    }
  }
}
