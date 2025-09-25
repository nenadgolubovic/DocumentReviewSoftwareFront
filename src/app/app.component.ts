import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommentListComponent } from "./components/comment-list/comment-list.component";
import { DocumentViewComponent } from "./components/document-view/document-view.component";
import { UploadButtonComponent } from "./components/upload-button/upload-button.component";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { AddPartButtonComponent } from "./components/add-part-button/add-part-button.component";
import { RegisterComponent } from './components/register/register.component';
import { LogInButtonComponent } from "./components/log-in-button/log-in-button.component";
import { HttpClientModule } from '@angular/common/http';
import { CommentSectionComponent } from './components/comment-section/comment-section.component';
import { RegisterButtonComponent } from './components/register-button/register-button.component';
import { HomePageComponent } from "./components/home-page/home-page.component";
import { EngineHomeComponent } from './components/engine-home/engine-home.component';
import { MenuComponent } from "./components/menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    RouterModule,
    MenuComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Document-Review-Swoftware-Front';
}
