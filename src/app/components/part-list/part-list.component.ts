import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { partDto, partTypeEnum } from '../../models/partDto';

@Component({
  selector: 'app-part-list',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatInputModule,MatPaginatorModule,MatTableModule,MatFormFieldModule],
  templateUrl: './part-list.component.html',
  styleUrl: './part-list.component.scss'
})
export class PartListComponent {
  displayedColumns: string[] = ['name', 'partNo', 'serialNo','partType','actions'];
  
    ELEMENT_DATA: partDto[] = [
      { name:'name1',partNumber: '123', serialNumber:'1234',partType:partTypeEnum.Basic,description:"123" },
      { name:'name1',partNumber: 'Document 1', serialNumber:'1234',partType:partTypeEnum.FanBlade,description:"123" }
    ];
  
    dataSource = new MatTableDataSource<partDto>(this.ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  
    viewDocument(doc: partDto) {
      console.log('View', doc);
    }
  
    downloadDocument(doc: partDto) {
      console.log('Download', doc);
    }
  
    deleteDocument(doc: partDto) {
      console.log('Delete', doc);
    }
}
