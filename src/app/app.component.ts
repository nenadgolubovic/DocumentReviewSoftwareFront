import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommentListComponent } from "./comment-list/comment-list.component";
import { CommentSectionComponent } from "./comment-section/comment-section.component";
import { DocumentViewComponent } from "./document-view/document-view.component";
import { UploadButtonComponent } from "./upload-button/upload-button.component";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DocumentListComponent } from './document-list/document-list.component';
import { AddEngineButtonComponent } from './add-engine-button/add-engine-button.component';
import { AddPartButtonComponent } from "./add-part-button/add-part-button.component";
import { RegisterComponent } from './register/register.component';
import { RegisterButtonComponent } from "./register-button/register-button.component";
import { LogInButtonComponent } from "./log-in-button/log-in-button.component";
import { UserViewComponent } from './user-view/user-view.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommentListComponent,
    CommentSectionComponent,
    UploadButtonComponent,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    DocumentListComponent,
    AddEngineButtonComponent,
    AddPartButtonComponent,
    RegisterComponent,
    RegisterButtonComponent,
    LogInButtonComponent,
    UserViewComponent,
    HttpClientModule
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Document-Review-Swoftware-Front';
}
