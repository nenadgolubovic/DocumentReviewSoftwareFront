import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";


@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  loggedUser: string = '';

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.getLoggedUser();
  }
      
    getLoggedUser(){
      this.authService.getLoggedUser().subscribe({
        next: (res) => {
          this.loggedUser = res.username;
          console.log('Logovani:', this.loggedUser);
        },
        error: (err) => {
          console.error('Nije autentifikovan:', err);
        }
      });
    }

  }


