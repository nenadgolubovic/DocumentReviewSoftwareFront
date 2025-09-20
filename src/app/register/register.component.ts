import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm: FormGroup;   // ⬅ definicija forme
  message: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // ⬇ inicijalizacija forme
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.message = 'Please fill in all fields correctly!';
      return;
    }

    this.http.post('http://localhost:8080/api/auth/register', this.registerForm.value, { responseType: 'text' })
      .subscribe({
        next: res => {
          this.message = res;
          this.registerForm.reset();
        },
        error: err => {
          this.message = err.error;
        }
      });
  }
}
