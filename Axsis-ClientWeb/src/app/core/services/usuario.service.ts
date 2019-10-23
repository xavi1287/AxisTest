import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { HttpClient } from '@angular/common/http';
import { UsuarioSerializer, Usuario } from '../models/user.model';

import { UsuarioReq } from '../models/user-req.model';
import { AppGlobal } from '../helper/app-global';

@Injectable()
export class UsuarioService extends RequestService<Usuario>{
  constructor(httpclient: HttpClient, appGlobal: AppGlobal) {
    super(
      httpclient
      , 'usuario'
      , new UsuarioSerializer()
      , appGlobal.baseApiPath);
  }
}
