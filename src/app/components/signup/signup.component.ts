import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user: User = new User();
  error: string = '';
  success: string = '';

  constructor(private userService: UserService) { }

  signup(f) {
    this.userService.signup(this.user).subscribe(res => {
      if (res != null) {
        this.error = '';
        this.success = 'Email address created successfully, you can now login to our app!';
        f.reset();
      }
    }, error => {
      if (error.status === 409) {
        this.success = '';
        this.error = 'This email address already exists!';
      }
    });
  }

}
