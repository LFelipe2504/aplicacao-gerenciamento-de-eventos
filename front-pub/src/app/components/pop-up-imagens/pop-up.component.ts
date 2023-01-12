import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {

  linkDaFoto;
  constructor(@Inject(MAT_DIALOG_DATA) public data: string){
    this.linkDaFoto = data.link;

  }

  //Fazer tratamento de erro ao carregar imagem
  menssagemErro(){
    return 'Não há imagem para ser carregada.'
  }


}
