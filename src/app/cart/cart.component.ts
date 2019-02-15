import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../auth/local-storage.service';
import { UserService } from '../auth/user.service';
import { ProductOfSubcategory } from '../app-models/productsOfSubcategoryResponse.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productIds: Array<number>;
  productDetails: any;
  products: Array<any> = [];
  subTotal: number = 0;
  shipping: number = 0;


  constructor(public localStorage: LocalStorageService, public userService: UserService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.products = [];
    this.subTotal = 0;
    this.shipping = 0;

    this.productIds = JSON.parse(this.localStorage.getProductsData().productIds);
    for(let id of this.productIds){
      this.userService.getProductDetail(id).subscribe(res => {
          this.productDetails = res;
          this.productDetails.image = environment.files + this.productDetails.image;
          this.subTotal = this.subTotal + Number(this.productDetails.price);
          console.log(this.subTotal);
          this.shipping = this.shipping + 100;
          this.products.push(this.productDetails);
      });
      
    }
  }
  removeFromCart(event){
    console.log(event);
    let prodId = event.target.id;
    console.log(prodId);
    this.productIds = this.productIds.filter(item => 
      item !== prodId
    
    );
    console.log(this.productIds);
    this.localStorage.saveProductsData(JSON.stringify(this.productIds));
    this.getProducts();
  }

}
