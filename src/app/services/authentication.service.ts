import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {
    if (username === 'moh' && password === '123456') {
      sessionStorage.setItem('user', username);
      return true;
    }
    return false;
  }

  isLoggedIn() {
    return sessionStorage.getItem('user') !== null;
  }

  logout() {
    sessionStorage.removeItem('user');
  }
}
