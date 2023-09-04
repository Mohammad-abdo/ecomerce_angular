import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UsersDataService } from 'src/app/services/users-data.service';


@Component({
  selector: 'app-api-products',
  templateUrl: './api-products.component.html',
  styleUrls: ['./api-products.component.scss']
})
export class ApiProductsComponent {
  user:User={} as User
constructor(private apiuser:UsersDataService,private Router:Router) {}
isLoading:boolean=false
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


