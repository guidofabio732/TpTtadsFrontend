import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: Usuario[];
  apiUrl = 'http://localhost:8000/api'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {

    this.http.get(`${this.apiUrl}/listusers`)
      // .subscribe({
      //   next: (res: any) => {
      //     this.usuarios = res.data
      //   }
      // });
      .subscribe((usuarios: any) => this.usuarios = usuarios);
  }
}
