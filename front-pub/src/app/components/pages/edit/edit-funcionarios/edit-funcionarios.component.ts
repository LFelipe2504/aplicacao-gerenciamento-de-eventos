import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Funcionario } from 'src/app/interfaces/Funcionario';

import { FuncionarioService } from 'src/app/services/funcionario/funcionario.service';

@Component({
  selector: 'app-edit-funcionarios',
  templateUrl: './edit-funcionarios.component.html',
  styleUrls: ['./edit-funcionarios.component.css']
})
export class EditFuncionariosComponent implements OnInit{

  funcionario!: Funcionario;
  btnText: string = 'Editar';

  constructor(
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router,){}

  ngOnInit(): void {
    const id = String (this.route.snapshot.paramMap.get('id'));

    this.funcionarioService.getFuncionario(id).subscribe((funcionario) => {
      this.funcionario = funcionario;
    });
  }

  async editHandler(funcionario: Funcionario){
    const id = this.funcionario._id;

    await this.funcionarioService.updateFuncionario(id, funcionario).subscribe();

    this.router.navigate(['/funcionarios']);
  }
}
