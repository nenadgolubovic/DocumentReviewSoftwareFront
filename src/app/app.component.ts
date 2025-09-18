import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommentListComponent } from "./comment-list/comment-list.component";
import { CommentSectionComponent } from "./comment-section/comment-section.component";
import { DocumentViewComponent } from "./document-view/document-view.component";
import { UploadButtonComponent } from "./upload-button/upload-button.component";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommentListComponent, CommentSectionComponent, DocumentViewComponent, UploadButtonComponent, MatCardModule, MatButtonModule, MatIconModule ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Document-Review-Swoftware-Front';
}
