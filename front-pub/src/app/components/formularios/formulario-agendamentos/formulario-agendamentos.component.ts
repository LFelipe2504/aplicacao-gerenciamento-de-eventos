import { Component,EventEmitter,Input, OnInit, Output  } from '@angular/core';


import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Agendamento } from 'src/app/interfaces/Agendamento';

import { Evento } from 'src/app/interfaces/Evento';
import { EventoService } from 'src/app/services/evento/evento.service';

import { Usuario } from 'src/app/interfaces/Usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';


@Component({
  selector: 'app-formulario-agendamentos',
  templateUrl: './formulario-agendamentos.component.html',
  styleUrls: ['./formulario-agendamentos.component.css']
})
export class FormularioAgendamentosComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<Agendamento>();
  @Input() btnText!: string;
  @Input() agendamentoData: Agendamento | null = null;

  agendamentoForm!: FormGroup;

  usuarios : Usuario[] = [];
  eventos : Evento[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private eventoService: EventoService,
  ) {}

  ngOnInit(): void {

    this.usuarioService.getUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    });

    this.eventoService.getEventos().subscribe(eventos => {
      this.eventos = eventos;
    });

   this.agendamentoForm = new FormGroup({
    idUsuario: new FormControl(this.agendamentoData ? this.agendamentoData.idUsuario : '', [Validators.required]),
    idEvento: new FormControl(this.agendamentoData ? this.agendamentoData.idEvento : '', [Validators.required]),
    data: new FormControl(this.agendamentoData ? this.agendamentoData.data: '', [Validators.required]),
    hora: new FormControl(this.agendamentoData ? this.agendamentoData.hora : '', [Validators.required]),
   });
  }

  get idUsuario() {
   return this.agendamentoForm.get('idUsuario')!;
  }

  get idEvento() {
   return this.agendamentoForm.get('idEvento')!;
  }

  get data() {
   return this.agendamentoForm.get('data')!;
  }

  get hora() {
    return this.agendamentoForm.get('hora')!;
  }



  submit() {
   if(this.agendamentoForm.invalid){
     return;
   }
   console.log(this.agendamentoForm.value)

   this.onSubmit.emit(this.agendamentoForm.value);

   this.reloadPag();
  }

  reloadPag(){
    if(this.btnText === 'Enviar'){
     window.location.reload();
    }
  }
}
