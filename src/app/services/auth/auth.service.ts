import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiLoginUrl = 'http://localhost:8080/user/login';
  private getLoggedUserApi = 'http://localhost:8080/user/home'

  constructor(private http: HttpClient){}

  loginUser(username:string, password: string): Observable<any>{
    const body = { username, password };
    return this.http.post<any>(`${this.apiLoginUrl}`, body,{ withCredentials: true });
  }

   getLoggedUser(): Observable<any> {
    return this.http.get<{ username: string }>(`${this.getLoggedUserApi}`,{ withCredentials: true });
  }
}
