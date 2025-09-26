import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-log-out-button',
  imports: [MatCardModule, MatIconModule,MatButtonModule],
  templateUrl: './log-out-button.component.html',
  styleUrl: './log-out-button.component.scss'
})
export class LogOutButtonComponent {

}
