import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Fornecedor } from 'src/app/interfaces/Fornecedor';

import { FornecedorService } from 'src/app/services/fornecedor/fornecedor.service';


@Component({
  selector: 'app-edit-fornecedores',
  templateUrl: './edit-fornecedores.component.html',
  styleUrls: ['./edit-fornecedores.component.css']
})

export class EditFornecedoresComponent implements OnInit{

  fornecedor!: Fornecedor;
  btnText: string = 'Editar';

  constructor(
    private fornecedorService: FornecedorService,
    private route: ActivatedRoute,
    private router: Router,){}

  ngOnInit(): void {
    const id = String (this.route.snapshot.paramMap.get('id'));

    this.fornecedorService.getFornecedor(id).subscribe((fornecedor) => {
      this.fornecedor = fornecedor;
    });
  }

  async editHandler(fornecedor: Fornecedor){
    const id = this.fornecedor._id;

    await this.fornecedorService.updateFornecedor(id, fornecedor).subscribe();

    this.router.navigate(['/fornecedores']);
  }

}
