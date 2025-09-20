import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

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
    HttpClientModule
  ],
})
export class CommentSectionComponent {
  commentTitle: string = '';
  commentText: string = '';

  constructor(private http: HttpClient) {}

  submitComment() {
    const newComment = {
      commentTitle: this.commentTitle,
      comment: this.commentText,
      commentDate: new Date(),      
      userId: 1,       
      isApproved: false,       
      rate: null             
    };

    // POST zahtev ka backendu
    this.http.post('http://localhost:8080/comment', newComment)
      .subscribe({
        next: (response) => {
          console.log('Comment submitted successfully:', response);
          // Reset polja nakon slanja
          this.commentTitle = '';
          this.commentText = '';
        },
        error: (error) => {
          console.error('Error submitting comment:', error);
        }
      });
  }
}
