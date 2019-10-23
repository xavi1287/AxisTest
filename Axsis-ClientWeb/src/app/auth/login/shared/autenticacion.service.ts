import { Injectable } from '@angular/core';
import { LoginObject } from './login-object.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MensajeRespuesta } from 'src/app/core/models/session.model';
import { AppGlobal } from './../../../core/helper/app-global';
@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private pathAuthenticate = 'login/';
  private basePath: string;
  constructor(private httpClient: HttpClient, private varGlobal: AppGlobal) {
    this.basePath = varGlobal.baseApiPath + this.pathAuthenticate;
  }



  login(loginObj: LoginObject): Observable<MensajeRespuesta> {
   //loginObj.empAppId = this.varGlobal.empAppId;
    return this.httpClient.post<MensajeRespuesta>(this.basePath + 'login', loginObj);
  }

  logout(): Observable<Boolean> {
    return this.httpClient.post<Boolean>(this.basePath + 'logout', {});
  }
}
