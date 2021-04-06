import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Usuario } from './models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiUrl = 'http://localhost:8000/api';
  //private readonly apiUrl = `${environment.apiUrl}/api/usuario`; lo ideal es guardar la url base en enviroment
  private currentUserSubject: BehaviorSubject<Usuario>;
  currentUser: Observable<Usuario>;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  //Login

  login(nombre_usuario: string, password: string) {
    return this.http.post<Usuario>(`${this.apiUrl}/usuario/login`, { nombre_usuario, password }, this.httpOptions)
      .pipe(
        map((user: any) => {
          // guardo los detalles del usuario y el token en el local storage
          localStorage.setItem('currentUser', JSON.stringify(user.data));
          this.currentUserSubject.next(user.data); // emite un observable a los demas componentes con el nuevo usuario
          return user;
        })
      );
  }


  // Logout
  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  //Register
  register(nuevoUsuario: string) {
    return this.http.post<any>(`${this.apiUrl}/register`, nuevoUsuario, this.httpOptions);
  }
  
  public get currentUserValue() {
    return this.currentUserSubject.value;
  }
}
