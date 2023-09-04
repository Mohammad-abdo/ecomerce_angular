import { ICategory } from './../../Models/icategory';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IProducts } from 'src/app/Models/i-products';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CardsFilterationService } from 'src/app/services/cards-filteration.service';
import { Router } from '@angular/router';
import { ApiProductsService } from 'src/app/services/api-products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  // productList: IProducts[];
  constructor(
    private prdservice: CardsFilterationService,
    private router: Router,
    private ApiProductsService: ApiProductsService
  ) {}

  date: Date = new Date();
  showImg: boolean = true;
  hide_show(index: IProducts) {
    if (index) {
      this.showImg = !this.showImg;
    }
  }

  selectOption: string = '';
  filterProducts: IProducts[] = [];
  PRID: IProducts[] = [];

  getproductById(i: number): IProducts | undefined {
    return this.prdservice.productList.find((pro) => pro.id == i);
  }
  getproduct(i: number) {
    console.log(i);
  }
  // @Input() set listFilter(value: string) {
  //   this.filterProducts = this.performFilter(value);
  // }
  @Input() set listFilter(value: number) {
    this.filterProducts = this.filterProductsByPrice(value);
  }
  ngOnInit(): void {
    // this.filterProducts = this.prdservice.productList;
    this.ApiProductsService.getAllproducts().subscribe(
      data=>{
        console.log(data)
        this.filterProducts=data
      }
    )

  }

  filterProductsByPrice(Price: number): IProducts[] {
    if (!Price || Price == 0) {
      return this.prdservice.productList;
    } else {
      return (this.filterProducts = this.prdservice.productList.filter(
        (product) => product.price <= Price
      ));
    }
  }

  @Output() new = new EventEmitter<IProducts>();

  funCart(val: IProducts) {
    this.new.emit(val);
  }
  prDetails(PrdID: number) {
    this.router.navigate(['/product', PrdID]);
  }
}
