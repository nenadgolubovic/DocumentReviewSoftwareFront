import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommentSectionComponent } from '../comment-section/comment-section.component';
import { CommentService } from '../../services/comment/comment.service';

@Component({
  selector: 'app-comment-list',
  standalone: true,
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.scss',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    
  ],
})
export class CommentListComponent implements OnInit {

  comments: any[] = [];

  constructor(private commentService:CommentService) {}

  ngOnInit() {
    
    this.commentService.comments$.subscribe(data => this.comments = data);
    this.commentService.loadComments().subscribe();
  }

}
