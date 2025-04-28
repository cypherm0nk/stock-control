import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  loginCard = true;
  loginForm=this.formbuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  signUpForm=this.formbuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]]
  })
  constructor(private readonly formbuilder: FormBuilder) {}
  ngOnInit(): void {
    this.loginCard = true;
  }
  onSubmitLoginForm():void {
    console.log("dados do form de login",this.loginForm.value);
  }
  onSubmitLoginSignUpFormForm():void {
    console.log("dados do form de sign up",this.signUpForm.value);
  }
  login() {
    if (this.loginForm.valid) {
      // Perform login action
      console.log('Login successful');
    } else {
      // Handle form validation errors
      console.log('Form is invalid');
    }
  }

}
