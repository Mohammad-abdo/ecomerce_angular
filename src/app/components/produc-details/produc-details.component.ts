import { ApiProductsComponent } from './../api-products/api-products.component';
import { CardsFilterationService } from 'src/app/services/cards-filteration.service';
import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/Models/i-products';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiProductsService } from 'src/app/services/api-products.service';
import { ProductsWithApiService } from 'src/app/services/products-with-api.service';
@Component({
  selector: 'app-produc-details',
  templateUrl: './produc-details.component.html',
  styleUrls: ['./produc-details.component.scss'],
})
export class ProducDetailsComponent implements OnInit{
  singlProduct: IProducts | undefined = undefined;
  singlProductIdList: number [] = []
  currentIndex:number=0
  PRID: number = 0;
  constructor(
    private _CardsFilterationService: CardsFilterationService,
    private ActivatedRout: ActivatedRoute,
    private router:Router,
   private location:Location,
   private ApiProducts:ApiProductsService,
   private ProductsWithApiService:ProductsWithApiService
  ) {}
  ngOnInit():void{
//     this.PRID=(this.ActivatedRout.snapshot.paramMap.get('id'))?Number(this.ActivatedRout.snapshot.paramMap.get('id')):0;
// console.log(this.PRID);

    // this.singlProduct=this._CardsFilterationService.getProductById(this.PRID)
    this.singlProductIdList=this._CardsFilterationService.getProductList()
    console.log(this._CardsFilterationService);
    this.ActivatedRout.paramMap.subscribe(paramMap=>{
      this.PRID=(paramMap.get('id'))?Number(paramMap.get('id')):0
// let x=this._CardsFilterationService.getProductById(this.PRID)
this.ProductsWithApiService.getProductID(this.PRID).subscribe(
  data=>{
    console.log(data);
    this.singlProduct=data

  }
)
// console.log(x);

// if(x){
//   this.singlProduct = x

// }else{
//   alert("not found");
//   this.location.back()
// }
    })
  }
  BackToParet(){
    this.router.navigate(['/products'])
  }
  prevProduct(){
this.currentIndex=this.singlProductIdList.indexOf(this.PRID)
console.log(this.currentIndex);
this.router.navigate(['/product',this.singlProductIdList[--this.currentIndex]])

  }
  nextProduct(){
    this.currentIndex=this.singlProductIdList.indexOf(this.PRID)
    console.log(this.currentIndex);
    this.router.navigate(['/product',this.singlProductIdList[++this.currentIndex]])
  }
targetFilter:string=''
target:any=''
  searchValues:IProducts[]=[]
  AllFilterInOne(filter:string ,val:any){
    this.ProductsWithApiService.getroductByQuery(filter,val).subscribe(data=>{
    this.searchValues=data
    console.log(data);
    console.log(val);
    console.log(filter);

    })
  }
}
