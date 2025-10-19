import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './test-form.html',
  styleUrl: './test-form.scss'
})
export class TestForm {

  private fb = inject(FormBuilder);

  userForm : any ;
  cuisineArr: any = ['Indian','Italian','Contential'];
  userData = signal<any>([]);

  constructor(){
    this.userForm = this.fb.group({
      userName: ['',Validators.required],
      cuisine: ['',Validators.required]
    })
  }

  handleSubmit(){
    console.log('form value',this.userForm.value);
    const data = this.userForm.value
    // this.userData.push(data);
    this.userData.update((prev)=> [...prev,data]);
    this.userForm.reset();
  }

  deleteUserData(index: number){
    console.log("index",index);
    this.userData.update((prev)=> {
      // let new = [...prev];
      prev.splice(index,1);
      return prev;
    })
    
  }

}
