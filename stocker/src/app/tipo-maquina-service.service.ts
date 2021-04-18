import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TipoMaquina } from './models/tipomaquina';

@Injectable({
  providedIn: 'root'
})
export class TipoMaquinaServiceService {

  apiUrl = 'http://localhost:8000/api/'

  constructor(private http: HttpClient) {}

  getTipoMaquina() {
    return this.http.get(this.apiUrl+'tipo_maquina/list')
  }

  createTipoMaquina(tipoMaquina: TipoMaquina) {
    return this.http.post(this.apiUrl+'tipo_maquina/create', tipoMaquina)
  }

  editTipoMaquina(tipoMaquina: TipoMaquina) {
    return this.http.post(this.apiUrl+'tipo_maquina/update', tipoMaquina)
  }

  deleteTipoMaquina(tipoMaquina: TipoMaquina) {
    return this.http.delete(this.apiUrl+'tipo_maquina/delete/id/'+tipoMaquina.id)
  }
}
