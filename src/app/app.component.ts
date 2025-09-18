import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommentListComponent } from "./comment-list/comment-list.component";
import { CommentSectionComponent } from "./comment-section/comment-section.component";
import { DocumentViewComponent } from "./document-view/document-view.component";
import { UploadButtonComponent } from "./upload-button/upload-button.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommentListComponent, CommentSectionComponent, DocumentViewComponent, UploadButtonComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Document-Review-Swoftware-Front';
}
