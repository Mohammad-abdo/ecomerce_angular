import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  userLog:boolean=false
  // isLogBehavior:BehaviorSubject<boolean>
constructor(private UserAuthService:UserAuthService,private Router:Router){
  // this.isLogBehavior=this.UserAuthService.isLogBehavior
this.userLog=this.UserAuthService.isUserLoggedIn
console.log(this.userLog);
}
  ngOnInit(): void {
    this.UserAuthService.getuserStatus().subscribe({
      next:(data)=>{
        this.userLog=data
        console.log(data);
      }
    })

  }
logOut(){
this.Router.navigate(['/login'])
  this.UserAuthService.logout()
}

}
