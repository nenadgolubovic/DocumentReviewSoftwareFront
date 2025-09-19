import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-engine-form',
    imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule
  ],
  standalone:true,
  templateUrl: './add-engine-form.component.html',
  styleUrl: './add-engine-form.component.scss'
})
export class AddEngineFormComponent {
  showForm = false;

  toggleForm(){
    this.showForm = !this.showForm
  }
}
