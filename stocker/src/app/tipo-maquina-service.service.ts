import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TipoMaquinaServiceService {

  constructor(private http: HttpClient) {}

  apiCall()
  {
    return this.http.get('/api/tipo_maquina/list')
  }
}
