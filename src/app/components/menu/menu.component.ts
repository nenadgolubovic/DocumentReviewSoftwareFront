import { Component } from '@angular/core';
import { LogInButtonComponent } from "../buttons/log-in-button/log-in-button.component";
import { LogOutButtonComponent } from "../buttons/log-out-button/log-out-button.component";
import { RegisterButtonComponent } from '../buttons/register-button/register-button.component';

@Component({
  selector: 'app-menu',
  imports: [LogInButtonComponent, RegisterButtonComponent, LogOutButtonComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
