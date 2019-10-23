import { UsuarioService } from './../core/services/usuario.service';
import { Usuario } from './../core/models/user.model';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UsuarioRes } from '../core/models/user-res.model';
@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {
  private usuarios: Usuario[] = [];
  private userRes = new UsuarioRes();
  constructor(private userService: UsuarioService) { }

  ngOnInit() {
    this.userService.getList('ObtenerUsuarios').subscribe(lstUsuario => this.usuarios = lstUsuario);
  }
  desactivarUsuario(usuarioId: number) {
    const usuarioSeleccionado = this.usuarios.filter((user: Usuario) => user.UsuarioId === usuarioId)[0];
    usuarioSeleccionado.estado = false;
    this.userService.postMetodo(usuarioSeleccionado, 'actualizar').subscribe(
      data => {
        this.userRes = data as UsuarioRes ;
        if (this.userRes.Resultado === 0) {
          Swal.fire({
            title: 'Exito!',
            text: this.userRes.Mensaje,
            type: 'success',
          });
         } else {
          Swal.fire({
            title: 'Advertencia!',
            text: this.userRes.Mensaje,
            type: 'warning',
          });
         }
      }
    );
  }
}
