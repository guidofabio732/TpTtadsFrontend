import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  //Login

  login(nombre_usuario: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/usuario/login`, { nombre_usuario, password }, this.httpOptions)
      .pipe(
        map((res: any) => {          
          // guardo los detalles del usuario y el token en el local storage
          localStorage.setItem('currentUser', JSON.stringify(res.data));
          this.currentUserSubject.next(res.data); // emite un observable a los demas componentes con el nuevo usuario
          return res.data;
        })
      );
  }


  // Logout
  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  //Register
  register(nuevoUsuario: any) {
    return this.http.post<any>(`${this.apiUrl}/usuario/register`, nuevoUsuario, this.httpOptions);
  }
  
  public get currentUserValue() {
    return this.currentUserSubject.value;
  }
}
