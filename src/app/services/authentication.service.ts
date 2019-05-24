import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  getAuthenticatedUser() {
    return sessionStorage.getItem('user');
  }

  getAuthenticationToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem('token');
    }
  }

  authenticate(email: string, pass: string) {
    return this.http.post<any>(`${API_URL}/api/auth/login`, {username: email, password: pass});
  }

  isLoggedIn() {
    return sessionStorage.getItem('user') !== null;
  }

  logout() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
  }
}
