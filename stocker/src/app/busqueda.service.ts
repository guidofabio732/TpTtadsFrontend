import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  constructor(private http: HttpClient, private router: Router ) { }

  base_url = 'http://localhost:8000/api'; 


  buscarMaquinas(searchQuery) {
    return this.http.get(`${this.base_url}/tipo_maquina/list/${searchQuery}`);
  }

  buscarPiezas(searchQuery) {
    return this.http.get(`${this.base_url}/tipo_pieza/list/${searchQuery}`);
  }
}
