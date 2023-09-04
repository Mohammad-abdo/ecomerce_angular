
import { Component } from '@angular/core';
import { IProducts } from 'src/app/Models/i-products';
import { CardsFilterationService } from 'src/app/services/cards-filteration.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
inputValue:number=0
filter:any[]=[]
filter2:string=''
constructor(){
  let  fi= new CardsFilterationService()
 this.filter= fi.productList
 console.log( this.filter= fi.productList);


}
selectOption: string = '';
filterProducts: IProducts[] = [];
set listFilter(value: any) {
  this.filterProducts = this.performFilter(value);
}
ngOnInit(): void {
  this.filterProducts = this.filter;
}
performFilter(filterValue: string): IProducts[] {
  filterValue = filterValue.toLowerCase();
  return this.filter.filter((product: IProducts) =>
    product.name.toLowerCase().includes(filterValue)
  );
}
}
