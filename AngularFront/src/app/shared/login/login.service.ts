import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse, HttpContext} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError, first, map, retry, tap} from 'rxjs/operators';
import {FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';

@Injectable()
export class LoginService {
  apiURL: string;
  private usuarioSessao: BehaviorSubject<Usuario> | any;
  public usuario: Observable<Usuario>;

  constructor(private router: Router,
              private http: HttpClient) {
    this.apiURL = "/api/v1/usuarios/auth";
    //this.apiURL = "https://jsonplaceholder.typicode.com/users";
    let sessaoString : any = sessionStorage.getItem("usuarioSessao");
    this.usuarioSessao = new BehaviorSubject<Usuario>(JSON.parse(sessaoString));
    this.usuario = this.usuarioSessao.asObservable();

  }

  login(email:string, senha:string) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //Authorization: 'my-auth-token'.
      })
    };
    return this.http.post<Usuario>(this.apiURL, {email: email, senha: senha}, httpOptions);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // Client-side
      console.error('Algo deu errado!:', error.error);
    } else {
      console.error(
        `Erro [${error.status}], resposta foi: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Algo deu errado! Tente novamente.'));
  }
}
