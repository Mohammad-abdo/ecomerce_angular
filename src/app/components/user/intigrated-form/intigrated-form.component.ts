import { Component } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms';
import { UsersDataService } from 'src/app/services/users-data.service';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
@Component({
  selector: 'app-intigrated-form',
  templateUrl: './intigrated-form.component.html',
  styleUrls: ['./intigrated-form.component.scss']
})
export class IntigratedFormComponent {
  constructor(private apiuser:UsersDataService,private Router:Router) {}
  isLoading:boolean=false
 registerForm:FormGroup=new FormGroup({
  firstName:new FormControl('',[Validators.required]),
  lastName:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required]),
  address:new FormControl('',[Validators.required,Validators.maxLength(50)]),
  birthDate:new FormControl('',[Validators.required]),
  phone:new FormControl('',[Validators.pattern(/^01[1235][0-9]{8}$/)]),
})
get firstName(){
  return this.registerForm.get('firstName')
}
get lastName(){
  return this.registerForm.get('lastName')
}
get email(){
  return this.registerForm.get('email')
}
get password(){
  return this.registerForm.get('password')
}
get address(){
  return this.registerForm.get('address')
}
get birthDate(){
  return this.registerForm.get('birthDate')
}
get phone(){
  return this.registerForm.get('phone')
}
user:User={} as User
apiErrors:string=''
addUser(){
  this.apiuser.signupUser(this.user).subscribe({
    next:(data)=>{
      this.isLoading=true
      console.log(data);
      // this.Router.navigate(['/parent'])

    },
    error:(err)=>{
  console.log();
  this.apiErrors=err.message
    },
    complete:()=>{
      this.isLoading=false
    }
  })
}
}
