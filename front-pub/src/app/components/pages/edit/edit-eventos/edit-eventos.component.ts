import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Evento } from 'src/app/interfaces/Evento';

import { EventoService } from 'src/app/services/evento/evento.service';

@Component({
  selector: 'app-edit-eventos',
  templateUrl: './edit-eventos.component.html',
  styleUrls: ['./edit-eventos.component.css']
})
export class EditEventosComponent implements OnInit{

  evento!: Evento;
  btnText: string = 'Editar';

  constructor(
    private eventoService: EventoService,
    private route: ActivatedRoute,
    private router: Router,){}

  ngOnInit(): void {
    const id = String (this.route.snapshot.paramMap.get('id'));

    this.eventoService.getEvento(id).subscribe((evento) => {
      this.evento = evento;
    });
  }

  async editHandler(evento: Evento){
    const id = this.evento._id;

    await this.eventoService.updateEvento(id, evento).subscribe();

    this.router.navigate(['/eventos']);
  }
}
