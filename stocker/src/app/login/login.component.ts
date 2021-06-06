import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

    // si ya esta logueado lo manda a la pagina principal
    if (this.authService.currentUserValue) {
      this.router.navigate(['/tipomaquina']);
    }
  }

  formIsValid: boolean;
  loginForm: FormGroup;
  usuario: Usuario;
  error: any;
  errorMsg = '';


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      nombre_usuario: new FormControl('', [
        Validators.required,
      ]
      ),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

  login() {

    if (this.loginForm.invalid) return;
    

    this.usuario = this.loginForm.value; //recupero el usuario del form

    if(this.usuario.nombre_usuario.trim() === '' || this.usuario.password.trim() === '') return;

    this.authService.login(this.usuario.nombre_usuario, this.usuario.password)
      .subscribe({
        next: () => {
          this.router.navigate(['/tipomaquina']);
        },
        error: error => {
          this.error = error;
          this.errorMsg = this.error.error.message;
        }
      });
  }

  get nombre_usuario() { return this.loginForm.get('nombre_usuario'); }
  get password() { return this.loginForm.get('password'); }
}
