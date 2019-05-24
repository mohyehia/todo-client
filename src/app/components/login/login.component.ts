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
    this.authenticationService.authenticate(f.value.email, f.value.password).subscribe(res => {
      // console.log(res.status);
      this.error = '';
      sessionStorage.setItem('user', f.value.email);
      sessionStorage.setItem('token', res.token);
      this.router.navigate(['todos']);
    }, error => {
      console.log(error.status);
      this.error = 'Email or Password is invalid';
    });
  }

}
