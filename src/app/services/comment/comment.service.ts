import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  comments: any[] = []; 
  private commentsSubject = new BehaviorSubject<any[]>([]);
  comments$ = this.commentsSubject.asObservable();
  loadApi ="http://localhost:8080/comment/getAllByDocumentIdAndUserId";
  putCommentApproveApi ="http://localhost:8080/comment/approve";
  putCommentRatingApi ="http://localhost:8080/comment/rateComment";
  saveApi ="http://localhost:8080/comment";


  constructor(private http: HttpClient) { }

  
  postComment(comment: any): Observable<any> {
  return this.http.post<any>(this.saveApi, comment)
    .pipe(
      tap(() => {
        console.log(this.commentsSubject.value);
        const currentComments = this.commentsSubject.value;

        this.commentsSubject.next([...currentComments, comment]);
      })
    );  
  }

  loadComments(documentId:number): Observable<any[]> {
   return this.http.get<any[]>(`${this.loadApi}/${documentId}/1`)
     .pipe(
       tap(data => this.commentsSubject.next(data)) 
     );
  }

  approve(commentId:number) : Observable<any> {
      return this.http.put(`${this.putCommentApproveApi}/${commentId}`, null, { responseType: 'text' });
  }
  setRating(commentId:number,rate:number): Observable<any> {
      return this.http.put(`${this.putCommentRatingApi}/${commentId}/${rate}`, null, { responseType: 'text' });
  }

}

