import { Base, ISerializer } from './base.model';
import { UsuarioRes } from './user-res.model';

export class UsuarioReq extends Base {
  public UsuarioId?: number;
  public ClaveAnterior?: string;
  public ClaveNueva?: string;
  super(object: any) {
    this.UsuarioId = (object.UsuarioId) ? object.UsuarioId : null;
    this.ClaveAnterior = (object.ClaveAnterior) ? object.ClaveAnterior : null;
    this.ClaveNueva = (object.ClaveNueva) ? object.ClaveNueva : null;
  }

}
export class UsuarioSerializer implements ISerializer {
  fromJson(json: any): Base {
    const usuarioRes = new UsuarioRes();
    usuarioRes.Resultado = json.codigo;
    usuarioRes.Mensaje = json.mensajeRespuesta;
    usuarioRes.Usuario = json.usuario;
    return usuarioRes;
  }

  toJson(base: Base) {
    return {
      usuarioId: (base as UsuarioReq).UsuarioId,
    };
  }
}
