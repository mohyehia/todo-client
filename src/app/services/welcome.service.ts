import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hello } from '../models/hello';

@Injectable({
  providedIn: 'root'
})

export class WelcomeService {

  constructor(private http: HttpClient) { }

  getMessage() {
    return this.http.get<Hello>('http://localhost:8080/hello');
  }
}
