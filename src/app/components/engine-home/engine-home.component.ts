import { Component } from "@angular/core";
import { AddPartButtonComponent } from "../add-part-button/add-part-button.component";
import { MatCard, MatCardModule } from "@angular/material/card";
import { MatIconModule } from '@angular/material/icon';
import { CommentSectionComponent } from "../comment-section/comment-section.component";
import { CommentListComponent } from "../comment-list/comment-list.component";
import { MatButtonModule } from "@angular/material/button";
import { PartListComponent } from "../part-list/part-list.component";
import { DocumentListComponent } from "../document-list/document-list.component";
import { CommonModule } from "@angular/common";
import { PartService } from "../../services/part/part.service";


@Component({
  selector: 'app-engine-home',
  imports: [
    AddPartButtonComponent,
    MatCard,
    MatIconModule,
    MatButtonModule,
    CommentSectionComponent,
    CommentListComponent, MatCardModule,
    PartListComponent,
    DocumentListComponent,
    CommonModule
],
  templateUrl: './engine-home.component.html',
  styleUrl: './engine-home.component.scss'
})

export class EngineHomeComponent {
  
  constructor(public partService:PartService){

  }
}
