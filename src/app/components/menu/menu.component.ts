import { Component, OnInit } from '@angular/core';
import { LogInButtonComponent } from "../buttons/log-in-button/log-in-button.component";
import { LogOutButtonComponent } from "../buttons/log-out-button/log-out-button.component";
import { RegisterButtonComponent } from '../buttons/register-button/register-button.component';
import { AuthService } from '../../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [LogInButtonComponent, RegisterButtonComponent, LogOutButtonComponent, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{
  isLoggedIn: boolean = false;
  username: string = '';
  constructor(private authService:AuthService, private router: Router){

  }

  ngOnInit() {
    this.authService.isLoggedIn().subscribe(status => {
      this.isLoggedIn = status;
    });

    this.authService.getCurrentUser().subscribe(user => {
      if (user) {
        this.username = user.username;
      } else {
        this.username = '';
      }
    });
  }

  logout(){
    this.authService.logoutUser();
    this.router.navigate(['/']);
    this.isLoggedIn = false;
  }
}
