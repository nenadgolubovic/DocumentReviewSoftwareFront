import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

    canActivate(): Observable<boolean> {
      return this.authService.checkLoginFromServer().pipe(
        tap(isLogged => {
          if (!isLogged) {
            this.router.navigate(['/']);
          }
        })
      );
    }
}
