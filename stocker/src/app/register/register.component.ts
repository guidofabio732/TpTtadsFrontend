import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  usuario: Usuario;
  error = '';
  passCtrl: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.passCtrl = true;

    this.registerForm = new FormGroup({
      nombre: new FormControl('', [
        Validators.required
      ]),
      apellido: new FormControl('', [
        Validators.required
      ]),
      nombre_usuario: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      passwordConfirm: new FormControl('', [
        Validators.required
      ]),
    });
  }

  register() {
    if (this.registerForm.invalid) return;

    this.usuario = this.registerForm.value;

    // if (this.usuario.nombre_usuario.trim() === '' || this.usuario.password.trim() === '' 
    // || this.usuario.nombre.trim() === '' || this.usuario.apellido.trim() === '' 
    // || this.usuario.passwordConfirm.trim()) return;

    if (this.usuario.password !== this.usuario.passwordConfirm) {
      this.passCtrl = false;
      return;
    } else {
      this.passCtrl = true
    }

    console.log(this.usuario);
    this.authService.register(this.usuario)
      .subscribe({
        next: () => {
          alert('Usuario creado con exito');
          this.router.navigate(['/login']);
        },
        error: error => {
          this.error = error;
          console.log(this.error);
        }
      });


  }

  get nombre_usuario() { return this.registerForm.get('nombre_usuario'); }
  get password() { return this.registerForm.get('password'); }
  get nombre() { return this.registerForm.get('nombre'); }
  get apellido() { return this.registerForm.get('apellido'); }
  get passwordConfirm() { return this.registerForm.get('passwordConfirm'); }



}
