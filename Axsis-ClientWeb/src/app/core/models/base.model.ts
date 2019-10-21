export class Base {
  public EsHabilitado?: boolean;
  public EsEliminado?: boolean;
}

export interface ISerializer {
  fromJson(json: any): Base;
  toJson(base: Base): any;
}
