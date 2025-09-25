import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-message-popup',
  standalone:true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './message-popup.component.html',
  styleUrl: './message-popup.component.scss'
})
export class MessagePopupComponent {
  @Input() message: string = '';
  visible: boolean = false;

  show(msg: string) {
    this.message = msg;
    this.visible = true;
  }

  close() {
    this.visible = false;
  }
}