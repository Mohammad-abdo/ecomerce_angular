import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
http={}
  constructor(private _HttpClient:HttpClient) {
    this.http={
      headers:new HttpHeaders({'Content-Type':'application/json'})
    }
   }
  signupUser(newUser:User):Observable<User>{
    //_HttpClient.post<user> =>  method tack 3 paeameters 1 => url , 2 => data from json type , 3 => header from content type
    return this._HttpClient.post<User>(`${environment.BaseApiURL}/users`,JSON.stringify(newUser),this.http)
  }
  getAllUsers():Observable<User[]>{
    return this._HttpClient.get<User[]>(`${environment.BaseApiURL}/users`,this.http)
   }
}
