import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgForm } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatSelectModule } from "@angular/material/select";
import { CommonModule } from '@angular/common';
import { PartService } from '../../services/part/part.service';
import { partDto, partTypeEnum } from '../../models/partDto';



@Component({
  selector: 'app-add-part-form',
    imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    CommonModule
],
  standalone:true,
  templateUrl: './add-part-form.component.html',
  styleUrl: './add-part-form.component.scss'
})
export class AddPartFormComponent {
  partTypes = Object.values(partTypeEnum);        

  constructor(private http: HttpClient, private partService: PartService) {}

  onSave(form: NgForm) {
    if (form.valid) {

      const partData: partDto = {
        name : form.value.name,
        partNumber: form.value.partNumber,
        description: form.value.description,
        serialNumber: form.value.serialNumber,
        partType:form.value.partType
      };
      
      this.partService.Save(partData);
   
    }
  }
}