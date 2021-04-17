import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  // si devuelve true, la ruta esta permitida
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const currentUser = this.authService.currentUserValue;
    if(currentUser) {
      return true; //esta logueado, lo dejo acceder
    }
    this.router.navigate(['/login']); // si no esta logueado lo mando al login
    return false;
  }

}
