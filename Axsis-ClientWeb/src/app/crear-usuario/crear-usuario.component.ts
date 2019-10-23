import { MensajeRespuesta } from './../core/models/session.model';
import { UsuarioRes } from './../core/models/user-res.model';
import { UsuarioService } from './../core/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors, FormControl } from '@angular/forms';
import { UsuarioReq } from '../core/models/user-req.model';
import { Usuario } from '../core/models/user.model';

import { AlertService } from '../core/services/alert.service';
import { StorageService } from '../core/services/storage.service';
export const passwordMatchValidator: ValidatorFn = (formGroup: FormGroup): ValidationErrors | null => {
  if (formGroup.get('password').value === formGroup.get('password2').value) {
    return null;
  } else {
    return { passwordMismatch: true };
  }
};
@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})

export class CrearUsuarioComponent implements OnInit {
  minPw = 10;
  minUser = 7;
  formGroup: FormGroup;
  emailFormControl: FormControl;
  public submitted = false;
  public userRes = new UsuarioRes();
  private alerta: AlertService;

  constructor(private formBuilder: FormBuilder, private userService: UsuarioService, private storageService: StorageService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(this.minPw)]],
      password2: ['', [Validators.required]],
      login: ['', [Validators.required, Validators.minLength(this.minUser)]],
    }, { validator: passwordMatchValidator });
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  }

  get password() { return this.formGroup.get('password'); }
  get password2() { return this.formGroup.get('password2'); }
  get login() { return this.formGroup.get('login'); }


  onPasswordInput() {
    if (this.formGroup.hasError('passwordMismatch')) {
      this.password2.setErrors([{ 'passwordMismatch': true }]);
    } else {
      this.password2.setErrors(null);
    }
  }

  public submitLogin(): void {
    this.submitted = true;

    if (this.formGroup.valid) {
      var userid = this.storageService.getCurrentUser().UsuarioId;
      const usuarioReq: Usuario = {
        Sexo: 1,
        login: this.login.value,
        correo: this.emailFormControl.value,
        clave: this.password.value,
        estado: true,
        UsuarioId: userid
      };
      console.log(usuarioReq);
      this.userService.post(usuarioReq).subscribe(
        data => {
          this.userRes = data as UsuarioRes;
          if (this.userRes.Resultado !== -1) {

            this.alerta.success(this.userRes.Mensaje);
            document.getElementById('alerta').focus();
          } else {
            this.alerta.error(this.userRes.Mensaje);
            document.getElementById('alerta').focus();
          }
        }
      );
    }
  }
}
