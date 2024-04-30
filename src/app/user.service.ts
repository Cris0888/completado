// shared/user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usuario: string = "";

  constructor() { }

  setUser(usuario: string) {
    this.usuario = usuario;
  }

  getUser(): string {
    return this.usuario;
  }
}
