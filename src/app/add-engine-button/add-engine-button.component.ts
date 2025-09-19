import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AddEngineFormComponent } from '../add-engine-form/add-engine-form.component';

@Component({
  selector: 'app-add-engine-button',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './add-engine-button.component.html',
  styleUrl: './add-engine-button.component.scss'
})
export class AddEngineButtonComponent {
  constructor(private dialog: MatDialog) {}

  toggleForm() {
    this.dialog.open(AddEngineFormComponent, {
      width: '400px'
    });
  }
}
