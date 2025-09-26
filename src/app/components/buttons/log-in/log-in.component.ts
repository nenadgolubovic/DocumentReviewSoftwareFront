import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { MessagePopupComponent } from '../../shared/message-popup.component';
import { SuccessDialogComponent } from '../../success-dialog/success-dialog.component';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MessagePopupComponent
  ],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  public get authService(): AuthService {
    return this._authService;
  }
  public set authService(value: AuthService) {
    this._authService = value;
  }
  username: string = '';
  password: string = '';
  message: string='';

  @ViewChild('popup') popup!: MessagePopupComponent;

  constructor(private _authService: AuthService,private dialog: MatDialog , private dialogRef: MatDialogRef<LogInComponent>,  private router: Router ) {
    
  }

  submit() {
        this.authService.loginUser(this.username, this.password).subscribe({
      next: (response) => {
        this.dialogRef.close();
        this.router.navigate(['/engine-home']); 
         this.dialog.open(SuccessDialogComponent, {
                    data: { message: response.username + ', you are logged in succesfully!' },
                    maxWidth: '800px'
                  });

      },
      error: () => {
          this.message = "User is not found";
      }
    });
  }
}