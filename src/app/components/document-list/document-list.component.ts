import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule, DatePipe } from '@angular/common';
import { documentDto } from '../../models/documentDto';
import { DocumentService } from '../../services/documet/document.service';
import { PartService } from '../../services/part/part.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-document-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    DatePipe,
    CommonModule
  ],
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent {
  displayedColumns: string[] = ['documentName', 'date'];
  dataSource = new MatTableDataSource<documentDto>([]);
  hoveredRow: any = null;  

  @Output() pdfSelected = new EventEmitter<any>(); 
  @Output() documentSelected = new EventEmitter<any>();

   selectedFile: SafeResourceUrl | null = null;
   
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private documentService: DocumentService,private partService:PartService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.loadDocuments();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadDocuments(): void {
    this.documentService.getById(this.partService.currentPartId).subscribe({
      next: (docs) => {
        console.log(docs);
        this.dataSource.data = docs.map(doc => ({
          ...doc,
          date: new Date(doc.documentDate),
          documentRoute: `http://localhost:8080/document/${doc.documentName}` 

        }));
      },
      error: (err) => {
        console.error("Error during loading... ", err);
      }
    });
  }


  onRowClicked(row: any) {
    
    const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(row.documentRoute);
    this.selectedFile = safeUrl;
    this.documentSelected.emit(row);
    this.pdfSelected.emit(row);
    }
}