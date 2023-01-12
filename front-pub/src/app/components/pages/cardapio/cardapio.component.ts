import { Component, OnInit } from '@angular/core';

import { Comida } from 'src/app/interfaces/Comida';
import { ComidaService } from 'src/app/services/comida/comida.service';

import { Bebida } from 'src/app/interfaces/Bebida';
import { BebidaService } from 'src/app/services/bebida/bebida.service';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../../pop-up-imagens/pop-up.component';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent  implements OnInit {

  btnText = 'Enviar';

  cadastro = false;
  cadastroBebida = false;

  allComidas: Comida[] = [];
  comidas: Comida[] = [];
  baseApiUrlComida = this.comidaService.getApiUrl();

  allBebidas: Bebida[] = [];
  bebidas: Bebida[] = [];
  baseApiUrlBebida = this.bebidaService.getApiUrl();

  searchTerm: string = '';
  faSearch = faSearch;

  constructor(
    private comidaService: ComidaService,
    private bebidaService: BebidaService,
    private router: Router,
    private dialogRef: MatDialog){}

  ngOnInit(): void {
    this.comidaService.getComidas().subscribe(dados => {
      this.allComidas = dados;
      this.comidas = dados;
    });

    this.bebidaService.getBebidas().subscribe(dados => {
      this.allBebidas = dados;
      this.bebidas = dados;
    });

 }
  openPopUp(comida: Comida){
    this.dialogRef.open(PopUpComponent, {
      data:{
        link: comida.foto
      }
    });
  }

  openPopUpBebida(bebida: Bebida){
    this.dialogRef.open(PopUpComponent, {
      data:{
        link: bebida.foto
      }
    });
  }

  cadastroHandler(cadastro:boolean){
    this.cadastro = !this.cadastro;
  }

  cadastroHandlerBebida(cadastroBebida:boolean){
    this.cadastroBebida = !this.cadastroBebida;
  }

  async createHandler(comida: Comida) {
   await this.comidaService.createComida(comida).subscribe();

  }

  async createHandlerBebida(bebida: Bebida) {
    await this.bebidaService.createBebida(bebida).subscribe();

   }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.comidas = this.allComidas.filter((comida) =>
    comida.nome.toLowerCase().includes(value)
    );

    this.bebidas = this.allBebidas.filter((bebida) =>
    bebida.nome.toLowerCase().includes(value)
    );
  }

  async removeHandler(id: string) {
    if(confirm ("Realmente deseja excluir?")){
      await this.comidaService.removeComida(id).subscribe();
      this. reloadPag()
    }
  }

  async removeHandlerBebida(id: string) {
    await this.bebidaService.removeBebida(id).subscribe();
    this. reloadPag()
  }

  reloadPag(){
    window.location.reload()
  }
}
