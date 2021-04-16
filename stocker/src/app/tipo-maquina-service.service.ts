import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TipoMaquina } from './models/tipomaquina';

@Injectable({
  providedIn: 'root'
})
export class TipoMaquinaServiceService {

  constructor(private http: HttpClient) {}

  getTipoMaquina() {
    return this.http.get('/api/tipo_maquina/list')
  }

  createTipoMaquina(tipoMaquina: TipoMaquina) {
    return this.http.post('/api/tipo_maquina/create', tipoMaquina)
  }

  editTipoMaquina(tipoMaquina: TipoMaquina) {
    return this.http.post('/api/tipo_maquina/update', tipoMaquina)
  }
}
