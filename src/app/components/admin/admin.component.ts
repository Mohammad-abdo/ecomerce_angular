import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/Models/i-products';
import { ApiProductsService } from 'src/app/services/api-products.service';
import { ProductsWithApiService } from 'src/app/services/products-with-api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
  peoducts:IProducts[]=[]
  peoduct:IProducts={
    id: 0,
    name: '',
    quantity: 0,
    price: 0,
    categoryId: 0,
    material: ''
  }
  id:number
  editpeoduct?:IProducts
constructor(    private ApiProductsService:ApiProductsService,private ProductsWithApiService:ProductsWithApiService){

  this.id=this.peoduct?.id
}
  ngOnInit(): void {
    this.ApiProductsService.getAllproducts().subscribe({
      next:(data)=>{
        this.peoducts=data
        console.log(this.peoducts);

      }
    })
  }
  delet(id:number){
    console.log(this.id);
    this.ProductsWithApiService.deleteProductID(id).subscribe({
      next:(data)=>{
console.log(data);

      },
      error:(err)=>{


      }
    })
    }
    getProduct(id:number){
    this.ProductsWithApiService.getProductID(id).subscribe({
      next:(data)=>{
    this.peoduct=data
  console.log(this.peoduct.id);


      }
    })
    }
      addProduct(id:number){
      this.ProductsWithApiService.editProductID(id ,this.peoduct).subscribe({
        next:(data)=>{
this.editpeoduct=data
        }
      })
    }
}
