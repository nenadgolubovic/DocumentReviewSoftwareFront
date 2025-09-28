import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommentService } from '../../services/comment/comment.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-comment-list',
  standalone: true,
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
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
export class CommentListComponent implements OnInit, AfterViewInit {
  @Input() documentId!: number | null;
  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;

  comments: any[] = [];
  currentIndex = 0;
  

  readonly cardWidth = 300;
  readonly gap = 20;    
  hoverRating  = 0; 
  constructor(public commentService: CommentService,private authService:AuthService) {}

 ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['documentId'] && this.documentId !== null) {
      this.loadCommentsForDocument(this.documentId);
    }
  }

  loadCommentsForDocument(documentId: number) {
    this.commentService.loadComments(documentId).subscribe({
      next: (comments) => {
        this.comments = comments;
        console.log(comments);
        comments.forEach(comment => {
          const id = comment.userId;
          if (id && !this.commentService.usernames[id]) {
            this.authService.getUserById(id).subscribe({
              next: user => this.commentService.usernames[id] = user.username,
              error: err => console.error('Error fetching user:', err)
            });
        }
    });
      },
      error: (err) => console.error(err)
    });

    this.commentService.comments$.subscribe(data => {
      this.comments = data;
    });
  }

  ngAfterViewInit() {
    this.scrollToIndex(this.currentIndex);
  }

  scrollLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.scrollToIndex(this.currentIndex);
    }
  }

  scrollRight() {
    if (this.currentIndex < this.comments.length - 1) {
      this.currentIndex++;
      this.scrollToIndex(this.currentIndex);
    }
  }

  private scrollToIndex(index: number) {
    const carouselEl = this.carousel.nativeElement;
    const scrollPos = index * (this.cardWidth + this.gap) - (carouselEl.offsetWidth - this.cardWidth) / 2;

    const maxScroll = carouselEl.scrollWidth - carouselEl.offsetWidth;
    const scrollToSafe = Math.min(Math.max(0, scrollPos), maxScroll);

    carouselEl.scrollTo({ left: scrollToSafe, behavior: 'smooth' });
  }

  setRating(comment: any, rating: number) {
    comment.rate = rating;
    this.commentService.setRating(comment.commentId,rating).subscribe({
      next: () => {
      },
      error: (err) => console.error(err)
    });
  }

  approve(comment: any) {
    this.commentService.approve(comment.commentId).subscribe({
      next: () => {
        comment.approved = true;
      },
      error: (err) => console.error(err)
    });
  }
}
 