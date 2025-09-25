import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MessagePopupComponent } from '../shared/message-popup.component';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MessagePopupComponent
  ],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  public get authService(): AuthService {
    return this._authService;
  }
  public set authService(value: AuthService) {
    this._authService = value;
  }
  username: string = '';
  password: string = '';

  @ViewChild('popup') popup!: MessagePopupComponent;

  constructor(private _authService: AuthService) {}

  submit() {
        this.authService.loginUser(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Server response:', response); 
        this.popup.show(response);
      },
      error: (err) => {    
        console.error('Greška:', err);
        this.popup.show('Greška pri logovanju!');
      }
    });
  }
}