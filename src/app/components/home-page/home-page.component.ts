import { Component } from '@angular/core';
import { LogInButtonComponent } from "../log-in-button/log-in-button.component";
import { RegisterButtonComponent } from "../register-button/register-button.component";
import { RegisterComponent } from "../register/register.component";

@Component({
  selector: 'app-home-page',
  imports: [LogInButtonComponent, RegisterButtonComponent, RegisterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
