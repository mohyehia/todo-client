import { Component, OnInit } from '@angular/core';
import { WelcomeService } from 'src/app/services/welcome.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private welcomeService: WelcomeService) { }

  ngOnInit() {
  }

  getMessage() {
    console.log(this.welcomeService.getMessage());
    this.welcomeService.getMessage().subscribe(response => {
      console.log(response.message);
    });
  }

}
