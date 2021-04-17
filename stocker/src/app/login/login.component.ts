import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
    
    // si ya esta logueado lo manda a la pagina principal, por ahora es solo un listado
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    nombre_usuario: new FormControl(''),
    password: new FormControl('')
  });

  usuario: Usuario;
  error = '';

  login() {

    if (this.loginForm.invalid)   return;

    this.usuario = this.loginForm.value; //recupero el usuario del form
    this.authService.login(this.usuario.nombre_usuario, this.usuario.password)
      .subscribe({
        next: () => {
          this.router.navigate(['/userlist']);
        },
        error: error => {
          this.error = error;
          console.log(this.error);
        }
      })
  }
}
