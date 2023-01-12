import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Bebida } from 'src/app/interfaces/Bebida';

import { BebidaService } from 'src/app/services/bebida/bebida.service';

@Component({
  selector: 'app-edit-bebidas',
  templateUrl: './edit-bebidas.component.html',
  styleUrls: ['./edit-bebidas.component.css']
})
export class EditBebidasComponent implements OnInit{

  bebida!: Bebida;
  btnText: string = 'Editar';

  constructor(
    private bebidaService: BebidaService,
    private route: ActivatedRoute,
    private router: Router,){}

  ngOnInit(): void {
    const id = String (this.route.snapshot.paramMap.get('id'));

    this.bebidaService.getBebida(id).subscribe((bebida) => {
      this.bebida = bebida;
    });
  }

  async editHandler(bebida: Bebida){
    const id = this.bebida._id;

    await this.bebidaService.updateBebida(id, bebida).subscribe();

    this.router.navigate(['/cardapio']);
  }
}
