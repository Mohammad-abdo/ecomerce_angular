
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from '../Models/i-products';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsWithApiService {
http={}
  constructor(private HttpClient:HttpClient) {
    this.http={
      headers:new HttpHeaders({'Content-Type':'application/json'})
    }
   }
  getAllProducts():Observable<IProducts[]>{
return this.HttpClient.get<IProducts[]>(`${environment.BaseApiURL}/products`);
// return this.HttpClient.get<IProducts>(" http://localhost:3000/product")
  }
  getProductID(id:number):Observable<IProducts>{
return this.HttpClient.get<IProducts>(`${environment.BaseApiURL}/products/${id}`)
// return this.HttpClient.get<IProducts>(" http://localhost:3000/product"+'/'+id)
  }
  deleteProductID(id:number):Observable<IProducts>{
    return this.HttpClient.delete<IProducts>(`${environment.BaseApiURL}/products/${id}`)
    // return this.HttpClient.get<IProducts>(" http://localhost:3000/product"+'/'+id)
      }
 editProductID(id:number,product:any):Observable<IProducts>{
    return this.HttpClient.patch<any>(`${environment.BaseApiURL}/products/${id}`,product)
    // return this.HttpClient.get<IProducts>(" http://localhost:3000/product"+'/'+id)
      }
  // post product
  createProduct(newProduct:IProducts):Observable<IProducts>{
    return this.HttpClient.post<IProducts>(`${environment.BaseApiURL}/products`,JSON.stringify(newProduct),this.http)
  }
  getroductByQuery(query:string,val:any):Observable<IProducts[]>{
  return this.HttpClient.get<IProducts[]>(`${environment.BaseApiURL}/products?${query}=${val}`)
}
}
