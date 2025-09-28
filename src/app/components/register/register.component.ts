import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
    ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm: FormGroup;
  message: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private dialog: MatDialog ,   
    private dialogRef: MatDialogRef<RegisterComponent>,
    private router: Router,
    private authService:AuthService   

  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      matchingPassword: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

   onSubmit() {
    if (this.registerForm.invalid) {
      this.message = 'Please fill in all fields correctly!';
      return;
    }

    this.authService.registerUser(this.registerForm.value).subscribe({
      next: res => {
        this.dialogRef.close();
        this.router.navigate(['/engine-home']);
        this.dialog.open(SuccessDialogComponent, {
          data: { message: res },
          maxWidth: '800px'
        });
      },
      error: err => {
        this.message = err.error;
      }
    });
  }
}