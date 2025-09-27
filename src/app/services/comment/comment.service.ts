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


  constructor(private http: HttpClient) { }

  
  postComment(comment: any): Observable<any> {
  return this.http.post<any>('http://localhost:8080/comment', comment)
    .pipe(
      tap(() => {
        console.log(this.commentsSubject.value);
        const currentComments = this.commentsSubject.value;

        this.commentsSubject.next([...currentComments, comment]);
      })
    );
}

  loadComments(): Observable<any[]> {
   return this.http.get<any[]>('http://localhost:8080/comment/all')
     .pipe(
       tap(data => this.commentsSubject.next(data)) 
     );
  }

}

