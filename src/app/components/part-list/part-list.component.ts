import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { partDto, partTypeEnum } from '../../models/partDto';
import { PartService } from '../../services/part/part.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-part-list',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatInputModule,MatPaginatorModule,MatTableModule,MatFormFieldModule],
  templateUrl: './part-list.component.html',
  styleUrl: './part-list.component.scss'
})
export class PartListComponent {
  displayedColumns: string[] = ['name', 'partNo', 'serialNo','partType','actions'];

  dataSource = new MatTableDataSource<partDto>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private partService: PartService) {}

  ngOnInit(): void {
    this.partService.parts$.subscribe(data => {
      this.dataSource.data = data; // svaki put kad se doda novi part, tabela se osvežava
    });

    this.partService.getAll();
  }

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    viewDocument(doc: partDto) { console.log('View', doc); }

    downloadDocument(part: partDto) { console.log('Download', part); }
        

    deletePart(id: number): void {
        this.partService.delete(id); 
    }
  }
  