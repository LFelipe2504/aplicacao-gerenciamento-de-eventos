import { Component,EventEmitter,Input, OnInit, Output  } from '@angular/core';


import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Evento } from 'src/app/interfaces/Evento';

@Component({
  selector: 'app-formulario-eventos',
  templateUrl: './formulario-eventos.component.html',
  styleUrls: ['./formulario-eventos.component.css']
})
export class FormularioEventosComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<Evento>();
  @Input() btnText!: string;
  @Input() eventoData: Evento | null = null;

  eventoForm!: FormGroup;


  constructor() {}

  ngOnInit(): void {
   this.eventoForm = new FormGroup({
     nome: new FormControl(this.eventoData ? this.eventoData.nome : '', [Validators.required]),
     descricao: new FormControl(this.eventoData ? this.eventoData.descricao : '', [Validators.required]),
     foto: new FormControl(this.eventoData ? this.eventoData.foto : ''),
     dataInicio: new FormControl(this.eventoData ? this.eventoData.dataInicio: '', [Validators.required]),
     dataFim: new FormControl(this.eventoData ? this.eventoData.dataFim: '', [Validators.required]),
     horaInicio: new FormControl(this.eventoData ? this.eventoData.horaInicio : '', [Validators.required]),
     horaFim: new FormControl(this.eventoData ? this.eventoData.horaFim : '', [Validators.required]),
   });
  }

  get nome() {
   return this.eventoForm.get('nome')!;
  }

  get descricao() {
   return this.eventoForm.get('descricao')!;
  }

  get foto() {
   return this.eventoForm.get('foto')!;
  }

  get dataInicio() {
    return this.eventoForm.get('dataInicio')!;
  }

  get dataFim() {
    return this.eventoForm.get('dataFim')!;
  }

  get horaInicio() {
    return this.eventoForm.get('horaInicio')!;
  }

  get horaFim() {
    return this.eventoForm.get('horaFim')!;
  }

  submit() {
   if(this.eventoForm.invalid){
     return;
   }
   console.log(this.eventoForm.value)

   this.onSubmit.emit(this.eventoForm.value);

   this.reloadPag();
  }

  reloadPag(){
    if(this.btnText === 'Enviar'){
     window.location.reload();
    }
  }
}
