import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-document-view',
  standalone: true,
  templateUrl: './document-view.component.html',
  styleUrl: './document-view.component.scss',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
})
export class DocumentViewComponent {

}
