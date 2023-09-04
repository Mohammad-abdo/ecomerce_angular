import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
HttpClient
Observable
@Injectable({
  providedIn: 'root'
})
export class TrendMovieService {

  constructor(private _HttpClient:HttpClient) { }
  getApi():Observable<any>{
   return this._HttpClient.get('https://dummyjson.com/products')
  }
}
