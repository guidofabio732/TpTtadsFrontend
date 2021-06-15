import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

  goToTipoMaquina() {
    this.router.navigate(['/tipomaquina'])
  }

  goToTipoPieza() {
    this.router.navigate(['/tipopieza']);
  }

  goToMaquinasPiezas() {
    this.router.navigate(['/maquinaspiezas'])
  }
}
