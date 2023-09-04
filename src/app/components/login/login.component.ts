import { HttpClient } from '@angular/common/http';
import { UserAuthService } from './../../services/user-auth.service';
import { Component } from '@angular/core';
import { UsersDataService } from 'src/app/services/users-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
constructor(private _UserAuthService:UserAuthService,private _HttpClient:HttpClient
  ,private _UsersDataService:UsersDataService,
  private rout:Router
  ){}
AuthError:string=''
emailInput:string=''
password:string=''
email:string=''
userLogIn(email:string,password:string){
  this._UserAuthService.login(email,password)
  console.log(this.password,this.emailInput);

}
login(): void {
  // this._HttpClient.get<any>('http://localhost:3000/users?email=')
  //   .subscribe(users => {
  //     console.log(users);
  //     if (users.length > 0) {
  //       console.log('Login successful');

  //     } else {
  //       console.log('Invalid email or password');

  //     }
  //   });
  this._UsersDataService.getAllUsers().subscribe({
    next:(users)=>{
      console.log(users);
      for (const user of users) {
      if(user.email==this.email){
        console.log("this email is exist");
        this._UserAuthService.login(user.email,user.password)
        this.rout.navigate(['/parent'])

      }else if(user.email !==this.email) {
        //  this.rout.navigate(['/parent'])
        this.AuthError="this email is not exist"
      }
      }

    },
    error:(err)=>{
      console.log(err);

    }
  })
}
}
