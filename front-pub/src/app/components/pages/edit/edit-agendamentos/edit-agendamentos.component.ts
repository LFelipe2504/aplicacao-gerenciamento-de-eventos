import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Agendamento } from 'src/app/interfaces/Agendamento';

import { AgendamentoService } from 'src/app/services/agendamento/agendamento.service';

@Component({
  selector: 'app-edit-agendamentos',
  templateUrl: './edit-agendamentos.component.html',
  styleUrls: ['./edit-agendamentos.component.css']
})
export class EditAgendamentosComponent implements OnInit{

  agendamento!: Agendamento;
  btnText: string = 'Editar';

  constructor(
    private agendamentoService: AgendamentoService,
    private route: ActivatedRoute,
    private router: Router,){}

  ngOnInit(): void {
    const id = String (this.route.snapshot.paramMap.get('id'));

    this.agendamentoService.getAgendamento(id).subscribe((agendamento) => {
      this.agendamento = agendamento;
    });
  }

  async editHandler(agendamento: Agendamento){
    const id = this.agendamento._id;

    await this.agendamentoService.updateAgendamento(id, agendamento).subscribe();

    this.router.navigate(['/agendamentos']);
  }
}
