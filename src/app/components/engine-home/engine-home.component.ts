import { Component } from "@angular/core";
import { AddPartButtonComponent } from "../add-part-button/add-part-button.component";
import { MatCard, MatCardModule } from "@angular/material/card";
import { MatIconModule } from '@angular/material/icon';
import { CommentSectionComponent } from "../comment-section/comment-section.component";
import { CommentListComponent } from "../comment-list/comment-list.component";
import { MatButtonModule } from "@angular/material/button";
import { PartListComponent } from "../part-list/part-list.component";


@Component({
  selector: 'app-engine-home',
  imports: [
    AddPartButtonComponent,
    MatCard,
    MatIconModule,
    MatButtonModule,
    CommentSectionComponent,
    CommentListComponent, MatCardModule,
    PartListComponent
],
  templateUrl: './engine-home.component.html',
  styleUrl: './engine-home.component.scss'
})
export class EngineHomeComponent {

}
