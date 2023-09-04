import { Component } from '@angular/core';
import { ApiProductsService } from 'src/app/services/api-products.service';
import { Router } from '@angular/router';
import { IProducts } from 'src/app/Models/i-products';
import { ProductsWithApiService } from 'src/app/services/products-with-api.service';
@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.scss']
})
export class ProductAdminComponent {
  product:IProducts={} as IProducts
constructor( private ApiProduct:ProductsWithApiService,private Router:Router){}
addProduct(){
  this.ApiProduct.createProduct(this.product).subscribe({
    next:(data)=>{
console.log(data);

    },
    error:()=>{

    }
  })
}
}
