import { Component, OnInit } from '@angular/core';

import { Usuario } from 'src/app/interfaces/Usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../../pop-up-imagens/pop-up.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  btnText = 'Enviar';

  cadastro = false;

  allUsuarios: Usuario[] = [];
  usuarios: Usuario[] = [];
  baseApiUrl = this.usuarioService.getApiUrl();

  searchTerm: string = '';
  faSearch = faSearch;

  constructor(private usuarioService: UsuarioService,
    private router: Router,
    private dialogRef: MatDialog){}

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(usuario => {
      this.allUsuarios = usuario;
      this.usuarios = usuario;
    });
  }

  cadastroHandler(cadastro:boolean){
    this.cadastro = !this.cadastro;
  }

  async createHandler(usuario: Usuario) {
   await this.usuarioService.createUsuario(usuario).subscribe();
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.usuarios = this.usuarios.filter((usuario) =>
    usuario.nome.toLowerCase().includes(value)
    );
  }

  async removeHandler(id: string) {
    if(confirm ("Realmente deseja excluir?")){
      await this.usuarioService.removeUsuario(id).subscribe();
      this. reloadPag()
    }
  }

  reloadPag(){
    window.location.reload()
  }
}
