import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: Usuario[];
  apiUrl = 'http://localhost:8000/api'

  constructor(private http: HttpClient, private authService : AuthService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  // ************** SOLO PARA TESTEAR - REMOVER ESTE COMPONENT *****************

  getUsuarios() {

    this.http.get(`${this.apiUrl}/listusers`) // aca debería ir a un usuario service y que se haga ahi la peticion
      .subscribe((usuarios: any) => {
        
        this.usuarios = usuarios.data
      });
  }

  logout() {
    this.authService.logout();
  }
 }
