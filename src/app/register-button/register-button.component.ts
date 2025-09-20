import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component'; // putanja do tvoje komponente

@Component({
  selector: 'app-register-button',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './register-button.component.html',
  styleUrls: ['./register-button.component.scss']
})
export class RegisterButtonComponent {

  constructor(private dialog: MatDialog) {}

  register() {
    this.dialog.open(RegisterComponent, {
      width: '400px', // širina popup-a
      // optional: height: 'auto', disableClose: true
    });
  }
}
