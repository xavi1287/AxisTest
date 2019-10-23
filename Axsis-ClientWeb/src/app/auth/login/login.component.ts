
import { AutenticacionService } from './shared/autenticacion.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { LoginObject } from './shared/login-object.model';
import { AlertService } from '../../core/services/alert.service';
import { StorageService } from '../../core/services/storage.service';
import { Router } from '@angular/router';
import { Session, MensajeRespuesta } from '../../core/models/session.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted = false;
  public error: { code: number, message: string } = null;
  constructor(
    private formBuilder: FormBuilder,
    private autenticacionService: AutenticacionService,
    private alertService: AlertService,
    private storageService: StorageService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  public submitLogin(): void {
    this.submitted = true;
    this.error = null;
    if (this.loginForm.valid) {
      this.autenticacionService.login(new LoginObject(this.loginForm.value)).subscribe(
        token => this.correctLogin(token),
        error => {
          this.alertService.error(error);
          this.error = error;
        }
      );
    }
  }
  private correctLogin(result: MensajeRespuesta) {
    // var data : Session ({token:tokenStr});
    if (result.mensajeRespuesta !== '') {
      const data: Session = { mensajeRespuesta: result.mensajeRespuesta,usuario:result.usuario };
      this.storageService.setCurrentSession(data);
      this.router.navigate(['/home']);

    } else {
      this.alertService.error(result.mensajeRespuesta);
    }
  }
}
