import { Injectable, OnInit } from '@angular/core';
import { IProducts } from 'src/app/Models/i-products';

@Injectable({
  providedIn: 'root',
})
export class CardsFilterationService {
  productList: IProducts[];
  filterProducts: IProducts[] = [];

  constructor() {
    this.productList = [
      {
        id: 1,
        name: "iphone 14pro max",
        quantity: 2,
        price: 50000,
        categoryId: 1,
        material: "perpale",
        prImageUrl: " https://btech.com/cdn-cgi/image/quality=50,format=auto/media/catalog/product/cache/7200f2a2e9389b4c813f2a4d8b201898/6/4/6487404_sd-medium.jpg"
      },
      {
        id: 2,
        name: "iphone 14pro max",
        quantity: 2,
        price: 50000,
        categoryId: 1,
        material: "perpale",
        prImageUrl: "https://btech.com/cdn-cgi/image/quality=50,format=auto/media/catalog/product/cache/7200f2a2e9389b4c813f2a4d8b201898/6/4/6487404_sd-medium.jpg"
      },
      {
        id: 3,
        name: "iphone 14pro max",
        quantity: 2,
        price: 50000,
        categoryId: 1,
        material: "perpale",
        prImageUrl: " https://btech.com/cdn-cgi/image/quality=50,format=auto/media/catalog/product/cache/7200f2a2e9389b4c813f2a4d8b201898/6/4/6487404_sd-medium.jpg"
      },
      {
        id: 10,
        name: "iphone 13pro",
        quantity: 0,
        price: 37000,
        categoryId: 1,
        material: "perpale",
        prImageUrl: "https://btech.com/cdn-cgi/image/quality=50,format=auto/media/catalog/product/cache/9ac35d44fbf9ab480e3973716ba09643/6/1/614fbeotjdl._ac_ul600_sr600_600__1.jpg"
      },
      {
        id: 4,
        name: "OPPO A50 S",
        quantity: 2,
        price: 4780,
        categoryId: 1,
        material: "meat",
        prImageUrl: "https://btech.com/cdn-cgi/image/quality=50,format=auto/media/catalog/product/cache/0799860a5482475be817e961d428f0bc/6/1/61ae167d1450f19eeb45322619b1f911605d6579735c50520de6079f735cf1cd.jpeg"
      },
      {
        id: 5,
        name: "OPPO A50 S",
        quantity: 2,
        price: 4780,
        categoryId: 1,
        material: "meat",
        prImageUrl: " https://btech.com/cdn-cgi/image/quality=50,format=auto/media/catalog/product/cache/0799860a5482475be817e961d428f0bc/6/1/61ae167d1450f19eeb45322619b1f911605d6579735c50520de6079f735cf1cd.jpeg"
      },
      {
        id: 6,
        name: "OPPO A50 S",
        quantity: 2,
        price: 4780,
        categoryId: 1,
        material: "meat",
        prImageUrl: "   https://btech.com/cdn-cgi/image/quality=50,format=auto/media/catalog/product/cache/0799860a5482475be817e961d428f0bc/6/1/61ae167d1450f19eeb45322619b1f911605d6579735c50520de6079f735cf1cd.jpeg"
      },
      {
        id: 7,
        name: "OPPO A50 S",
        quantity: 2,
        price: 4780,
        categoryId: 1,
        material: "meat",
        prImageUrl: "https://btech.com/cdn-cgi/image/quality=50,format=auto/media/catalog/product/cache/0799860a5482475be817e961d428f0bc/6/1/61ae167d1450f19eeb45322619b1f911605d6579735c50520de6079f735cf1cd.jpeg"
      },
      {
        id: 8,
        name: "3D/tv",
        quantity: 4,
        price: 12800,
        categoryId: 1,
        material: "meat",
        prImageUrl: "    https://m.media-amazon.com/images/I/61ckfbfWrfL._AC_SL1000_.jpg"
      },
      {
        id: 9,
        name: "'3D/tv'",
        quantity: 4,
        price: 12800,
        categoryId: 1,
        material: "'meat'",
        prImageUrl: "    'https://m.media-amazon.com/images/I/61ckfbfWrfL._AC_SL1000_.jpg',"
      },
      {
        id: 10,
        name: " 3D/tv",
        quantity: 5,
        price: 13500,
        categoryId: 1,
        material: "meat",
        prImageUrl: "   'https://m.media-amazon.com/images/I/61ckfbfWrfL._AC_SL1000_.jpg',"
      },
      {
        id: 11,
        name: "3D/tv",
        quantity: 3,
        price: 79080,
        categoryId: 1,
        material: "meat",
        prImageUrl: "https://m.media-amazon.com/images/I/61ckfbfWrfL._AC_SL1000_.jpg"
      },
      {
        id: 12,
        name: "Lenovo ThinkPad-20095",
        quantity: 2,
        price: 15890,
        categoryId: 1,
        material: "meat",
        prImageUrl: "https://m.media-amazon.com/images/I/51B06mTIrIL._AC_SL1000_.jpg"
      },
      {
        id: 13,
        name: "Lenovo ThinkPad-20095",
        quantity: 2,
        price: 15890,
        categoryId: 1,
        material: "meat",
        prImageUrl: "https://m.media-amazon.com/images/I/51B06mTIrIL._AC_SL1000_.jpg"
      },
      {
        id: 14,
        name: "Lenovo ThinkPad-20095",
        quantity: 5,
        price: 20890,
        categoryId: 1,
        material: "meat",
        prImageUrl: " https://m.media-amazon.com/images/I/51B06mTIrIL._AC_SL1000_.jpg"
      },
      {
        id: 15,
        name: "Lenovo ThinkPad-20095",
        quantity: 5,
        price: 20890,
        categoryId: 1,
        material: "meat",
        prImageUrl: "https://m.media-amazon.com/images/I/51B06mTIrIL._AC_SL1000_.jpg"
      },
      {
        id: 16,
        name: "laptop IOS",
        quantity: 0,
        price: 20000,
        categoryId: 1,
        material: "meat",
        prImageUrl: " https://m.media-amazon.com/images/I/61yTSCamQKL._AC_SL1500_.jpg"
      },
      {
        id: 17,
        name: "laptop IOS",
        quantity: 0,
        price: 20000,
        categoryId: 1,
        material: "meat",
        prImageUrl: " https://m.media-amazon.com/images/I/61yTSCamQKL._AC_SL1500_.jpg"
      },
      {
        id: 18,
        name: "laptop IOS",
        quantity: 0,
        price: 20000,
        categoryId: 1,
        material: "meat",
        prImageUrl: "https://m.media-amazon.com/images/I/61yTSCamQKL._AC_SL1500_.jpg"
      },

    ];
  }
  getAllData(): IProducts[] {
    return this.productList;
  }
  // filter by name
  performFilter(filterValue: string): IProducts[] {
    filterValue = filterValue.toLowerCase();
    return this.productList.filter((product: IProducts) =>
      product.name.toLowerCase().includes(filterValue)
    );
  }
  // filter By price
  filterProductsByPrice(Price: number): IProducts[] {
    if (!Price || Price == 0) {
      return this.productList;
    } else {
      return (this.filterProducts = this.productList.filter(
        (product) => product.price <= Price
      ));
    }
  }
  // get Product ID
  getProductById(PrID: number): IProducts | undefined {
    return this.productList.find((i) => i.id == PrID);
  }
// get arry of product Id
  getProductList():number[]{
return this.productList.map(product=>product.id)
  }
}
