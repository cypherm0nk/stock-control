import { UserService } from './../../services/user/user.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SignupUserRequest } from 'src/app/models/interface/user/SignupUserRequest';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  loginCard = true;
  loginForm = this.formbuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  signupForm = this.formbuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor(
    private readonly formbuilder: FormBuilder,
    private readonly userService: UserService
  ) {}
  ngOnInit(): void {
    this.loginCard = true;
  }
  onSubmitLoginForm(): void {
    console.log('dados do form de login', this.loginForm.value);
  }

  onSubmitLoginSignupForm(): void {
    if (this.signupForm.value && this.signupForm.valid) {
      this.userService
        .signupUser(this.signupForm.value as SignupUserRequest)
        .subscribe({
          next: (response) => {
            if (response) {
              alert('User created successfully');
            }
          },
          error: (error) => console.log(error),
        });
    }
  }
}
