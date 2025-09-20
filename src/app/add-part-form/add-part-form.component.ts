import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgForm } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

interface Part {
  partName: string;
  partNumber: string;
  description: string;
  serialNumber: string;
  tsn: string;
  csn: string;
}

@Component({
  selector: 'app-add-part-form',
    imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  standalone:true,
  templateUrl: './add-part-form.component.html',
  styleUrl: './add-part-form.component.scss'
})
export class AddPartFormComponent {

  private apiUrl = 'https://localhost:8080/part'; // zameni sa tvojim endpointom

  constructor(private http: HttpClient) {}

  onSave(form: NgForm) {
    if (form.valid) {
      const partData: Part = {
        partName: form.value.partName,
        partNumber: form.value.partNumber,
        description: form.value.description,
        serialNumber: form.value.serialNumber,
        tsn: form.value.tsn,
        csn: form.value.csn
      };

      this.http.post<Part>(this.apiUrl, partData).subscribe({
        next: (response) => {
          console.log('Part saved successfully:', response);
          form.reset(); // resetuje formu
        },
        error: (error) => {
          console.error('Error saving part:', error);
        }
      });
    } else {
      console.warn('Form is invalid');
    }
  }
}