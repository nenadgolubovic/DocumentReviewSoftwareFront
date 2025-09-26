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
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';



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

  constructor(private http: HttpClient, private partService: PartService, private dialog: MatDialog, private dialogRef: MatDialogRef<AddPartFormComponent>) {}

  onSave(form: NgForm) {
    if (form.valid) {

      const partData: partDto = {
        
        name : form.value.name,
        partNumber: form.value.partNumber,
        description: form.value.description,
        serialNumber: form.value.serialNumber,
        partType:form.value.partType
      };

      this.partService.save(partData); // samo poziva funkciju, bez subscribe
      this.dialogRef.close();
      this.dialog.open(SuccessDialogComponent, {
        data: { message: 'Part saved successfully!' }
      });


    }
  }
}