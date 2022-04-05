import { Injectable } from '@angular/core';
const TOKEN_KEY = 'auth-token';
const USUARIO_KEY = 'auth-usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioTokenStorageService {
  logout(): void {
    window.sessionStorage.clear();
  }
  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  public setUsuario(usuario: any): void {
    window.sessionStorage.removeItem(USUARIO_KEY);
    window.sessionStorage.setItem(USUARIO_KEY, JSON.stringify(usuario));
  }
  public getUsuario(): any {
    const user = window.sessionStorage.getItem(USUARIO_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
}
