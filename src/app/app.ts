import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { TestForm } from './components/test-form/test-form';
import { Login } from './components/login/login';

@Component({
  selector: 'app-root',
  imports: [RouterModule,RouterOutlet,FormsModule,ReactiveFormsModule,TestForm,Login],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('practice');
  name = signal("Saurabh");
  detectChange = 'value to be changed';
  namesArr = signal([1,2,3,4]);
  constructor(private cdr: ChangeDetectorRef,private router: Router){
    // setTimeout(() => {
    //   console.log("change name bro",this.name);
    //   this.name.set("sudhanshu");
    //   const newArr = [...this.namesArr()];
    //   newArr.push(5)
    //   // this.namesArr.set(newArr);
    //   this.namesArr.update((arr)=>[...arr,16]);
    //   console.log("new arre",newArr);

    // }, 5000);

    // setTimeout(() => {
    //   this.detectChange = 'value to change ho gyi bhai!!!!';
    //   this.cdr.detectChanges();
    // }, 10000);
  }



  userName = new FormControl('Saurabh');
  skillArray = ['Angular','React','Vue','Node','Mongo','Express'];
  // profileForm = new FormGroup({
  //   firstName: new FormControl('',[Validators.required,Validators.minLength(4)]),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     country: new FormControl('')
  //   })
  // });
  private formBuilder =  inject(FormBuilder);
   profileForm = this.formBuilder.group({
    firstName: ['',[Validators.required,Validators.minLength(4)]],
    lastName: [''],
    skills: this.formBuilder.array([],Validators.required),
    gender: ['male',Validators.required],
    address: this.formBuilder.group({
      city: [''],
      state: [''],
      country: ['']
    })
  });


  handleSubmit(event:any){
    event.preventDefault();
    console.log("event",event,this.profileForm);
    console.log(this.profileForm.value)
    console.log("valid",this.profileForm.valid);
    console.log("invalid",this.profileForm.invalid);
    // this.profileForm.patchValue({firstName:'sudhanshu'})
    // this.profileForm.get('firstName')?.setValue('Sudhanshu');
    // this.profileForm.get('address.city')?.setValue('Kanpur');
  }

  get skillsFormArray() {
    return this.profileForm.get('skills') as FormArray;
  }

    onSkillChange(event: any) {
    const skillName = event.target.value;
    if (event.target.checked) {
      this.skillsFormArray.push(new FormControl(skillName));
    } else {
      const idx = this.skillsFormArray.controls.findIndex(
        (x) => x.value === skillName
      );
      this.skillsFormArray.removeAt(idx);
    }
  }

  redirectTo(path:string,id?: number){
    if(id){
      this.router.navigate([path,id])
    }else{
      this.router.navigate([path],{
      queryParams: {sort: 'asc',activeTab: 'cash'}
    });
    }
    
  }

}

