import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MaquinaPieza } from './models/maquinaPieza';

@Injectable({
  providedIn: 'root'
})
export class MaquinasPiezasService {

  constructor(private http : HttpClient) { }

  apiUrl = 'http://localhost:8000/api'

  agregarMaquinaPieza(maquinaPieza: MaquinaPieza) {
    return this.http.post(`${this.apiUrl}/maquina_pieza/create`, maquinaPieza)
  }

  getMaquinasPiezas() {
    return this.http.get(`${this.apiUrl}/maquina_pieza/list`)
  }
}
