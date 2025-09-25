import { Component } from '@angular/core';
import { LogInButtonComponent } from "../log-in-button/log-in-button.component";
import { RegisterButtonComponent } from "../register-button/register-button.component";
import { LogOutButtonComponent } from "../log-out-button/log-out-button.component";

@Component({
  selector: 'app-menu',
  imports: [LogInButtonComponent, RegisterButtonComponent, LogOutButtonComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
