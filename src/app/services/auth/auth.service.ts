import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private currentUser = new BehaviorSubject<any>(null);
  private loggedIn = new BehaviorSubject<boolean>(false);

  private apiLoginUrl = 'http://localhost:8080/user/login';
  private getLoggedUserApi = 'http://localhost:8080/user/home'
  private logoutApi='http://localhost:8080/user/logout'
  private apiRegisterUrl = 'http://localhost:8080/user/register'
  private getById = 'http://localhost:8080/user/findById'

  constructor(private http: HttpClient){
      this.checkLoginStatus();
  }

  private checkLoginStatus() {
      this.getLoggedUser().subscribe({
        next: () => this.loggedIn.next(true),
        error: () => this.loggedIn.next(false)
      });

      
    }

    checkLoginFromServer(): Observable<boolean> {
    return this.getLoggedUser().pipe(
      tap(user => {
        this.loggedIn.next(true);
        this.currentUser.next(user);   
      }),
      map(() => true),
      catchError(err => {
        this.loggedIn.next(false);
        this.currentUser.next(null);   
        return of(false);
      })
    );
  }

  loginUser(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(this.apiLoginUrl, body, { withCredentials: true })
      .pipe(
          tap((user) => {
          this.loggedIn.next(true);
          this.currentUser.next(user);   
        })
      );
  }

  logoutUser(): void {
    this.http.post<any>(this.logoutApi, {}, { withCredentials: true }).subscribe({
      next: () => {
        this.loggedIn.next(false);
        this.currentUser.next(null);
      },
      error: () => {
        this.loggedIn.next(false);
        this.currentUser.next(null);
      }
    });
  }

   getLoggedUser(): Observable<any> {
    return this.http.get<{ username: string ; userId: number}>(`${this.getLoggedUserApi}`,{ withCredentials: true });
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

   registerUser(userData: any): Observable<string> {
    return this.http.post(this.apiRegisterUrl, userData, { responseType: 'text' ,withCredentials: true });
  }
  getCurrentUser(): Observable<any> {
    return this.currentUser.asObservable();
  }
  getUserById(userId: number): Observable<any> {
    return this.http.get(`${this.getById}/${userId}`,{ withCredentials: true });
  }
  
}

