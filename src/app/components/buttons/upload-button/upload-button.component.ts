import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { documentDto } from '../../../models/documentDto';
import { MatInputModule } from "@angular/material/input";
import { DocumentService } from '../../../services/documet/document.service';
import { SuccessDialogComponent } from '../../success-dialog/success-dialog.component';

@Component({
  selector: 'app-upload-button',
  standalone: true,
  templateUrl: './upload-button.component.html',
  styleUrl: './upload-button.component.scss',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatInputModule],
})

export class UploadButtonComponent {
  
    selectedFile: File | null = null;

    documentDto: documentDto = {
          documentName:"",
          documentDate:new Date(),
          documentRoute:"",
          partId:0,
      };

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,  private dialogRef: MatDialogRef<UploadButtonComponent>, private documentService:DocumentService, private dialog: MatDialog) {
    this.documentDto.partId = data.id;
    }
    
    onFileSelected(event: any) {
        const file: File = event.target.files[0];
        if (file) {
          this.selectedFile = file;
        }
      }

      upload() {
        if (!this.selectedFile) {
          console.warn("No selected file");
          return;
        }
        
        this.documentService.upload(this.data, this.selectedFile);
         this.dialog.open(SuccessDialogComponent, {
             data: { message : `Successfully uploaded file ${this.selectedFile.name}` },
            });
        this.dialogRef.close();
      }


     
}
