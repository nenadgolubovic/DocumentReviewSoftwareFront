import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LogInComponent } from '../log-in/log-in.component';

@Component({
  selector: 'app-log-in-button',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule, MatDialogModule],
  templateUrl: './log-in-button.component.html',
  styleUrls: ['./log-in-button.component.scss']
})
export class LogInButtonComponent {
  constructor(private dialog: MatDialog) {}

  openLogInForm() {
    this.dialog.open(LogInComponent, {
      width: '400px' // možeš prilagoditi širinu
    });
  }
}
