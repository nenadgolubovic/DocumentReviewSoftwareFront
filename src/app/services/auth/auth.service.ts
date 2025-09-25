import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiUrl = 'http://localhost:8080/user';

  constructor(private http: HttpClient){}

  loginUser(username:string, password: string): Observable<any>{
    const body = { username, password };
    return this.http.post<any>(`${this.apiUrl}/login`, body);
  }
}
