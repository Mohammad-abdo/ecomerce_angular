import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  userForm?:FormGroup
constructor(private formbuiler:FormBuilder){
this.userForm=this.formbuiler.group({
  lastName:['',[Validators.required,Validators.pattern('[A-Za-z]{4,}')]],
  firstName:['',[Validators.required,Validators.minLength(3)]],
  email:['',[Validators.required,Validators.pattern('^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$')]]
})
}
}
