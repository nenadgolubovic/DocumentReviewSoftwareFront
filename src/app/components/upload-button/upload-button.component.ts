import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-upload-button',
  standalone: true,
  templateUrl: './upload-button.component.html',
  styleUrl: './upload-button.component.scss',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
})
export class UploadButtonComponent {

}
