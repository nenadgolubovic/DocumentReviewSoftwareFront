import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommentService } from '../../services/comment/comment.service';

@Component({
  selector: 'app-comment-section',
  standalone: true,
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class CommentSectionComponent implements OnInit {
  commentTitle: string = '';
  commentText: string = '';
  comments: any[] = [];

  constructor( private commentService:CommentService) {}

  ngOnInit() {
  }

  submitComment() {
   const newComment = {
     commentTitle: this.commentTitle,
     comment: this.commentText,
     commentDate: new Date(),
     userId: 1,
     isApproved: false,
     rate: null
   };
     this.commentService.postComment(newComment).subscribe(() => {
     this.commentTitle = '';
     this.commentText = '';
   });
  
  }
}