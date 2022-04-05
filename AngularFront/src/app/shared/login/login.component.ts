import { HttpClient } from '@angular/common/http';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { catchError, first, Observable, of, pipe } from 'rxjs';
import { LoginService } from './login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioTokenStorageService } from './usuario-token-storage.service';

import { MatDialog } from '@angular/material/dialog';
import { ErroAlertComponent } from '../erro-alert/erro-alert.component';



@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  hide = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  senha = new FormControl('', [Validators.required]);

  usuarioObj : Usuario | any;

  form = this.formBuilder.group({
    email: this.email,
    senha: this.senha
  });

  loginService: LoginService;
  usuarioToken : UsuarioTokenStorageService;


  constructor(public dialog: MatDialog, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private http: HttpClient) {
    this.loginService = new LoginService(router, http);
    this.usuarioToken = new UsuarioTokenStorageService();

    this.usuarioObj = this.usuarioToken.getUsuario();

  }

  ngOnInit() {}

  onSubmit(): void {

    this.loginRun();
  }

  valid(){
    if(this.form.valid) return true;
    else return false;
  }

  getErrorMessage() {

    if (this.email.hasError('required')) {
      return 'E-mail obrigatório!';
    }

    return this.email.hasError('email') ? 'Digite um E-mail válido!' : '';
  }

  loginRun() {
    this.loginService.login(this.form.value.email, this.form.value.senha).subscribe({
      next: data => {
        if (data == null){
          this.onError("Oops...","Usuario não encontrado!");
          this.email.setErrors({'incorrect': true});
          this.senha.setErrors({'incorrect': true});
        }else {
          this.usuarioToken.setUsuario(data);
          /*this.tokenStorage.saveToken(data.accessToken);*/
          this.recarregaPagina();
        }
      },
      error: err => {
        console.log(err);
        this.onError("Oops...", "Erro: "+err);
        /*this.errorMessage = err.error.message;
        this.isLoginFailed = true;*/
      }
    });

  }

  recarregaPagina() {
    window.location.reload();
  }

  logoutRun() {
    this.usuarioToken.logout();
  }

  onError(title:string, errorMsg: string) {
    this.dialog.open(ErroAlertComponent, {
      data: {title: title, content: errorMsg}});
  }
}
