import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Usuario } from 'src/app/interfaces/Usuario';

import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-edit-usuarios',
  templateUrl: './edit-usuarios.component.html',
  styleUrls: ['./edit-usuarios.component.css']
})
export class EditUsuariosComponent implements OnInit{

  usuario!: Usuario;
  btnText: string = 'Editar';

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,){}

  ngOnInit(): void {
    const id = String (this.route.snapshot.paramMap.get('id'));

    this.usuarioService.getUsuario(id).subscribe((usuario) => {
      this.usuario = usuario;
    });
  }

  async editHandler(usuario: Usuario){
    const id = this.usuario._id;

    await this.usuarioService.updateUsuario(id, usuario).subscribe();

    this.router.navigate(['/usuarios']);
  }
}
