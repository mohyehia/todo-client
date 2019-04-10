import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string = '';

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  login(f) {
    if (this.authenticationService.authenticate(f.value.name, f.value.password)) {
      this.error = '';
      this.router.navigate(['todos']);
    }
    this.error = 'Username or Password is invalid';
  }

}
