import { Component } from '@angular/core';
import { IProducts } from 'src/app/Models/i-products';

@Component({
  selector: 'app-product-pairent',
  templateUrl: './product-pairent.component.html',
  styleUrls: ['./product-pairent.component.scss']
})
export class ProductPairentComponent {
minPrice: any;
filterByPrice(arg0: any,arg1: string) {
throw new Error('Method not implemented.');
}
  listFilter:number=0
  item: any;
  selectOption:number=0
  // Add Product  To Cart
  cart:IProducts[]=[]
fun(i:IProducts){
  // if not this id in Array add this product object
  if(!this.cart.find((product)=>product.id==i.id)){
    // Push object
      this.cart.push(i)
    i.quantity=0
    i.quantity++
  }else{
    i.quantity+=1
  }
}
delet(deletd:number){
  this.cart.forEach((value ,index)=>{
    if(value.id==deletd){

      this.cart.splice(index,1)
    }
  })

}
}
