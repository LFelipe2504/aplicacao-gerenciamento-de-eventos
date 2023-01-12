import { Component, OnInit } from '@angular/core';

import { Fornecedor } from 'src/app/interfaces/Fornecedor';
import { FornecedorService } from '../../../services/fornecedor/fornecedor.service';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../../pop-up-imagens/pop-up.component';



@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css']
})
export class FornecedoresComponent implements OnInit {

  btnText = 'Enviar';

  cadastro = false;

  allFornecedores: Fornecedor[] = [];
  fornecedores: Fornecedor[] = [];
  baseApiUrl = this.fornecedorService.getApiUrl();

  searchTerm: string = '';
  faSearch = faSearch;

  constructor(private fornecedorService: FornecedorService,
    private router: Router,
    private dialogRef: MatDialog){}

  ngOnInit(): void {
    this.fornecedorService.getFornecedores().subscribe(dados => {
      this.allFornecedores = dados;
      this.fornecedores = dados;
    });
  }
  openPopUp(fornecedor: Fornecedor){
    this.dialogRef.open(PopUpComponent, {
      data:{
        link: fornecedor.foto
      }
    });

  }
  cadastroHandler(cadastro:boolean){
    this.cadastro = !this.cadastro;
  }

  async createHandler(fornecedor: Fornecedor) {
   await this.fornecedorService.createFornecedor(fornecedor).subscribe();

  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.fornecedores = this.allFornecedores.filter((fornecedor) =>
    fornecedor.nome.toLowerCase().includes(value)
    );
  }

  async removeHandler(id: string) {
    if(confirm ("Realmente deseja excluir?")){
      await this.fornecedorService.removeFornecedor(id).subscribe();
      this. reloadPag()
    }
  }

  reloadPag(){
    window.location.reload()
  }

}
