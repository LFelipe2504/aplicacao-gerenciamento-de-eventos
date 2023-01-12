import { Component, OnInit } from '@angular/core';

import { Agendamento } from 'src/app/interfaces/Agendamento';
import { AgendamentoService } from 'src/app/services/agendamento/agendamento.service';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../../pop-up-imagens/pop-up.component';

@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.component.html',
  styleUrls: ['./agendamentos.component.css']
})
export class AgendamentosComponent implements OnInit {

  btnText = 'Enviar';

  cadastro = false;

  allAgendamentos: Agendamento[] = [];
  agendamentos: Agendamento[] = [];
  baseApiUrl = this.agendamentoService.getApiUrl();


  searchTerm: string = '';
  faSearch = faSearch;

  constructor(private agendamentoService: AgendamentoService,
    private router: Router,
    private dialogRef: MatDialog){}

  ngOnInit(): void {
    this.agendamentoService.getAgendamentos().subscribe(agendamentos => {
      this.allAgendamentos = agendamentos;
      this.agendamentos = agendamentos;
    });
  }

  cadastroHandler(cadastro:boolean){
    this.cadastro = !this.cadastro;
  }

  async createHandler(agendamento: Agendamento) {
   await this.agendamentoService.createAgendamento(agendamento).subscribe();

  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.agendamentos = this.allAgendamentos.filter((agendamento) =>
    agendamento.idUsuario.toLowerCase().includes(value)
    );
  }

  async removeHandler(id: string) {
    if(confirm ("Realmente deseja excluir?")){
      await this.agendamentoService.removeAgendamento(id).subscribe();  
      this. reloadPag()
    }
  }

  reloadPag(){
    window.location.reload()
  }

}
