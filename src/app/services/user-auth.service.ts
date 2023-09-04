import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
isLogBehavior:BehaviorSubject<boolean>
  constructor() {
    this.isLogBehavior= new BehaviorSubject<boolean>(this.isUserLoggedIn)
  }
  login(email:string,password:string){
localStorage.setItem("token",password)
localStorage.setItem("email",email)
this.isLogBehavior.next(true)
  }
  logout(){
localStorage.removeItem("token")
localStorage.removeItem("email")
this.isLogBehavior.next(false)
  }
  get isUserLoggedIn():boolean{
    return (localStorage.getItem("token"))?true:false
  }
  getuserStatus():Observable<boolean>{
    return this.isLogBehavior.asObservable()
  }
}
