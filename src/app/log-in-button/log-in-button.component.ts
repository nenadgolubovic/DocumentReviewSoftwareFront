import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-log-in-button',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './log-in-button.component.html',
  styleUrls: ['./log-in-button.component.scss']
})
export class LogInButtonComponent {
  logIn() {
    console.log('Log In button clicked!');
    // ovde možeš dodati logiku logovanja
  }
}
