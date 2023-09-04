
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProducts } from '../Models/i-products';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {
port:string='http://localhost:3000/products'
  constructor( private _HttpClient:HttpClient) { }
  // return All products from api and fun must type to observable balan 2n catch asyn
getAllproducts():Observable<IProducts[]>{
 return this._HttpClient.get<IProducts[]>(`${environment.BaseApiURL}/products`)
}

  // return One product from api BY ID

getProuctBYID(PID:number):Observable<IProducts>{
  return this._HttpClient.get<IProducts>(`${environment.BaseApiURL}/products/${PID}`)
}
// get products by Qyery string
getroductByQuery(query:string,val:any):Observable<IProducts[]>{
  return this._HttpClient.get<IProducts[]>(`${environment.BaseApiURL}/products?${query}=${val}`)
}
}
