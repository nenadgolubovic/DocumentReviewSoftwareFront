import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddPartFormComponent } from '../add-part-form/add-part-form.component';
import { CommonModule } from '@angular/common';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-add-part-button',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './add-part-button.component.html',
  styleUrl: './add-part-button.component.scss'
})
export class AddPartButtonComponent {
  constructor(private dialog: MatDialog) {}

  toggleForm() {
    this.dialog.open(AddPartFormComponent, {
      width: '400px'
    });
  }
}
