import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constants';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  getAuthenticationHeaders(email: string, password: string) {
    return 'Basic ' + window.btoa(email + ':' + password);
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('user');
  }

  getAuthenticationToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem('token');
    }
  }

  authenticate(email: string, pass: string) {
    const user: User = new User();
    user.email = email;
    user.password = pass;
    return this.http.post(`${API_URL}/api/auth/login`, user);
    // if (email === 'moh' && pass === '123456') {
    //   sessionStorage.setItem('user', email);
    //   sessionStorage.setItem('token', this.getAuthenticationHeaders(email, pass));
    //   return true;
    // }
    // return false;
  }

  isLoggedIn() {
    return sessionStorage.getItem('user') !== null;
  }

  logout() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
  }
}
