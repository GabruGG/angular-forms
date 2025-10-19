import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  private fb = inject(FormBuilder);
  loginForm : any;
  
  constructor(){
    this.loginForm = this.fb.group({
      userName: ['',Validators.required],
      password: ['',[Validators.minLength(8),Validators.maxLength(16),this.passwordValidator]]
    })
  }

  passwordValidator(controls:AbstractControl){
    const value = controls.value;
    console.log("value",value);
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/;
    if(regex.test(value)){
      console.log("returning true")
       return null;
    }else {
      console.log("returning false")
      return {
        passed: false
      }
    }
   
  }

  handleSubmit(){
    console.log("submit clicked",this.loginForm.value);
    alert(`userName: ${this.loginForm.value.userName}, password: ${this.loginForm.value.password}`)
  }

}
