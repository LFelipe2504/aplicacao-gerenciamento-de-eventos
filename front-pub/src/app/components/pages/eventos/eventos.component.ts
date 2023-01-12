import { Component, OnInit } from '@angular/core';

import { Evento } from 'src/app/interfaces/Evento';
import { EventoService } from 'src/app/services/evento/evento.service';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../../pop-up-imagens/pop-up.component';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  btnText = 'Enviar';

  cadastro = false;

  allEventos: Evento[] = [];
  eventos: Evento[] = [];
  baseApiUrl = this.eventoService.getApiUrl();

  searchTerm: string = '';
  faSearch = faSearch;

  constructor(private eventoService: EventoService,
    private router: Router,
    private dialogRef: MatDialog){}

  ngOnInit(): void {
    this.eventoService.getEventos().subscribe(eventos => {
      this.allEventos = eventos;
      this.eventos = eventos;
    });
  }
  openPopUp(evento: Evento){
    this.dialogRef.open(PopUpComponent, {
      data:{
        link: evento.foto
      }
    });

  }
  cadastroHandler(cadastro:boolean){
    this.cadastro = !this.cadastro;
  }

  async createHandler(evento: Evento) {
   await this.eventoService.createEvento(evento).subscribe();

  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.eventos = this.allEventos.filter((evento) =>
    evento.nome.toLowerCase().includes(value)
    );
  }

  async removeHandler(id: string) {
    if(confirm ("Realmente deseja excluir?")){
      await this.eventoService.removeEvento(id).subscribe();  
      this. reloadPag()
    }

  }

  reloadPag(){
    window.location.reload()
  }
}
