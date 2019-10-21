import { Base, ISerializer } from './base.model';

export class Usuario extends Base {
  public usuarioId: number;

  public Sexo?: string;
  public login: string;
  public clave?: string;
  public correo?: string;
  public resultado?: number;
  public mensaje?: string;
}

export class UsuarioSerializer implements ISerializer {

  fromJson(json: any): Base {

    const usuario = new Usuario();
    usuario.usuarioId = json.UsuarioId;
    usuario.Sexo = json.Sexo;
    usuario.login = json.Login;
    usuario.clave = '';
    usuario.correo = '';
    usuario.mensaje = json.Mensaje;
    usuario.resultado = json.Resultado;
    return usuario;
  }

  toJson(base: Base) {
    return {
      UsuarioId: (base as Usuario).usuarioId
    };
  }

}

