import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TipoPieza } from './models/tipopieza';

@Injectable({
  providedIn: 'root'
})
export class TipoPiezaServiceService {

  apiUrl = 'http://localhost:8000/api/'

  constructor(private http: HttpClient) {}

  getTipoPieza() {
    return this.http.get(this.apiUrl+'tipo_pieza/list')
  }

  createTipoPieza(tipoPieza: TipoPieza) {
    return this.http.post(this.apiUrl+'tipo_pieza/create', tipoPieza)
  }

  editTipoPieza(tipoPieza: TipoPieza) {
    return this.http.post(this.apiUrl+'tipo_pieza/update', tipoPieza)
  }

  deleteTipoPieza(tipoPieza: TipoPieza) {
    return this.http.delete(this.apiUrl+'tipo_pieza/delete/id/'+tipoPieza.id)
  }
}