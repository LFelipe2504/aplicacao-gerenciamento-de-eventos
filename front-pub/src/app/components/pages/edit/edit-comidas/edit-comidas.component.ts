import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Comida } from 'src/app/interfaces/Comida';

import { ComidaService } from 'src/app/services/comida/comida.service';

@Component({
  selector: 'app-edit-comidas',
  templateUrl: './edit-comidas.component.html',
  styleUrls: ['./edit-comidas.component.css']
})
export class EditComidasComponent implements OnInit{

  comida!: Comida;
  btnText: string = 'Editar';

  constructor(
    private comidaService: ComidaService,
    private route: ActivatedRoute,
    private router: Router,){}

  ngOnInit(): void {
    const id = String (this.route.snapshot.paramMap.get('id'));

    this.comidaService.getComida(id).subscribe((comida) => {
      this.comida = comida;
    });
  }

  async editHandler(comida: Comida){
    const id = this.comida._id;

    await this.comidaService.updateComida(id, comida).subscribe();

    this.router.navigate(['/cardapio']);
  }
}
