import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, catchError, of } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.createForm();
  }
  form!: FormGroup;
  error$ = new Subject<boolean>();

  createForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(60)]],
    });
  }

  onSubmit(): void {
    alert('Message sent Successfully!');
    window.location.reload();
  }
}
