import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  getAuthenticationHeaders() {
    const username: string = 'mohammed';
    const password: string = '123456';
    return 'Basic ' + window.btoa(username + ':' + password);
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('user');
  }

  getAuthenticationToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem('token');
    }
  }

  authenticate(username: string, password: string) {
    if (username === 'moh' && password === '123456') {
      sessionStorage.setItem('user', username);
      sessionStorage.setItem('token', this.getAuthenticationHeaders());
      return true;
    }
    return false;
  }

  isLoggedIn() {
    return sessionStorage.getItem('user') !== null;
  }

  logout() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
  }
}
