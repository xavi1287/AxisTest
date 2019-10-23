import { Base, ISerializer } from './base.model';

export class Usuario extends Base {
  public UsuarioId?: number;

  public Sexo?: number;
  public login: string;
  public clave?: string;
  public correo?: string;
  public estado?: boolean;
  public resultado?: number;
  public mensaje?: string;
}

export class UsuarioSerializer implements ISerializer {

  fromJson(json: any): Base {

    const usuario = new Usuario();
    usuario.UsuarioId = json.UsuarioId;
    usuario.Sexo = json.Sexo;
    usuario.login = json.Login;
    usuario.clave = json.Clave;
    usuario.correo = json.Email;
    usuario.estado = json.Estatus;
    usuario.mensaje = json.Mensaje;
    usuario.resultado = json.Resultado;
    return usuario;
  }

  toJson(base: Base) {
    return {
      UsuarioId: (base as Usuario).UsuarioId,
      SexoId:(base as Usuario).Sexo,
      Email:(base as Usuario).correo,
      Login:(base as Usuario).login,
      Contraseña:(base as Usuario).clave,
      Estatus:(base as Usuario).estado,
      UsarioCreacion:(base as Usuario).UsuarioId,
      UsarioModificacion:(base as Usuario).UsuarioId,
    };
  }

}

