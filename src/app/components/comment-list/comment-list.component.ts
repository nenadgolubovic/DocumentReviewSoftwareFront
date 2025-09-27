import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommentService } from '../../services/comment/comment.service';

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

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.commentService.comments$.subscribe(data => {
      if (this.documentId != null) {
        // this.comments = data.filter(c => c.documentId === this.documentId);
        this.comments=data;
      }
    });

    this.commentService.loadComments().subscribe({
      next: (comments) => {
        // if (this.documentId != null) {
        //   this.comments = comments.filter(c => c.documentId === this.documentId);
        // } else {
          this.comments = comments;
        // }
      },
      error: (err) => {
        console.error('Error loading comments:', err);
      }
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
  comment.rating = rating;
}
}
