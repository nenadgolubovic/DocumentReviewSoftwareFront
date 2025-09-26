import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { documentDto } from '../../models/documentDto';
import { DocumentService } from '../../services/documet/document.service';
import { PartService } from '../../services/part/part.service';

@Component({
  selector: 'app-document-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    DatePipe
  ],
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent {
  displayedColumns: string[] = ['documentName', 'date'];
  dataSource = new MatTableDataSource<documentDto>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private documentService: DocumentService,private partService:PartService) {}

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
          date: new Date(doc.documentDate)
        }));
      },
      error: (err) => {
        console.error("Error during loading... ", err);
      }
    });
  }
}