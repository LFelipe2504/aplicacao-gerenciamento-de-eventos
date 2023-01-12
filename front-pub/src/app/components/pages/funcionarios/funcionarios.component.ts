import { Component, OnInit } from '@angular/core';

import { Funcionario } from 'src/app/interfaces/Funcionario';
import { FuncionarioService } from 'src/app/services/funcionario/funcionario.service';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../../pop-up-imagens/pop-up.component';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  btnText = 'Enviar';

  cadastro = false;

  allFuncionarios: Funcionario[] = [];
  funcionarios: Funcionario[] = [];
  baseApiUrl = this.funcionarioService.getApiUrl();

  searchTerm: string = '';
  faSearch = faSearch;

  constructor(private funcionarioService: FuncionarioService,
    private router: Router,
    private dialogRef: MatDialog){}

  ngOnInit(): void {
    this.funcionarioService.getFuncionarios().subscribe(dados => {
      this.allFuncionarios = dados;
      this.funcionarios = dados;
    });
  }
  openPopUp(funcionario: Funcionario){
    this.dialogRef.open(PopUpComponent, {
      data:{
        link: funcionario.foto
      }
    });

  }
  cadastroHandler(cadastro:boolean){
    this.cadastro = !this.cadastro;
  }

  async createHandler(funcionario: Funcionario) {
   await this.funcionarioService.createFuncionario(funcionario).subscribe();

  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.funcionarios = this.allFuncionarios.filter((funcionario) =>
    funcionario.nome.toLowerCase().includes(value)
    );
  }

  async removeHandler(id: string) {
    if(confirm ("Realmente deseja excluir?")){
      await this.funcionarioService.removeFuncionario(id).subscribe();
      this. reloadPag()
    }
  }

  reloadPag(){
    window.location.reload()
  }

}
