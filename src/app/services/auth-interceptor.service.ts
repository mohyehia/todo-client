import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (this.getAuthenticationHeaders()) {
      req = req.clone({
        setHeaders : {
          Authorization : this.getAuthenticationHeaders()
        }
      });
    }

    return next.handle(req);
  }

  getAuthenticationHeaders() {
    const username: string = this.authenticationService.getAuthenticatedUser();
    const token: string = this.authenticationService.getAuthenticationToken();
    if (username && token) {
      return token;
    }
  }
}
