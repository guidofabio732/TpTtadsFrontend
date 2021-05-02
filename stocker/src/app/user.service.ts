import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  userExists(nombre_usuario) {
    return this.http.post(`${this.url}/usuario/userExists`, {
      nombre_usuario: nombre_usuario
    });
  }

}
