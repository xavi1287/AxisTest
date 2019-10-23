import { Base } from './base.model';
import { Usuario } from './user.model';

export class UsuarioRes extends Base {
  public Usuario: Usuario;
  public Resultado: number;
  public Mensaje: string;

}
