import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const currentUser = this.authService.currentUserValue;
    
    const isApiUrl = request.url.startsWith('http://localhost:8000/api');
    
    if (currentUser && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization : `Bearer ${currentUser}`
        }
      });
    }

    return next.handle(request);
  }
}
