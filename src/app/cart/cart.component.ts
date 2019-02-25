import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../auth/local-storage.service';
import { UserService } from '../auth/user.service';
import { ProductOfSubcategory } from '../app-models/productsOfSubcategoryResponse.model';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { LocalStorageDataModel } from '../app-models/localStorageData.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productIds: Array<LocalStorageDataModel> = [];
  productDetails: any;
  products: Array<any> = [];
  subTotal: number = 0;
  shipping: number = 0;


  constructor(public localStorage: LocalStorageService, public userService: UserService, public router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
  
    this.subTotal = 0;
    this.shipping = 0;
    if(this.localStorage.getProductsData() != null){
      this.productIds = JSON.parse(this.localStorage.getProductsData().productIds);
      for(let prod of this.productIds){
        this.userService.getProductDetail(prod.id).subscribe(res => {
            this.productDetails = res;
            this.productDetails.image = environment.files + this.productDetails.image;
            this.productDetails.quantity = prod.quantity;
            this.subTotal = this.subTotal + Number(this.productDetails.price * this.productDetails.quantity);
            console.log(this.subTotal);
            this.shipping = this.shipping + 100;
            this.products.push(this.productDetails);
        });
        
      }
    }
  }
  removeFromCart(event){
    console.log(event);
    let prodId = event.target.id;
    console.log(prodId);
    this.productIds = this.productIds.filter(item => 
      item.id !== prodId
    
    );
    console.log(this.productIds);
    this.localStorage.saveProductsData(JSON.stringify(this.productIds));
    this.products = [];
    this.getProducts();
  }
  checkout(){
    this.router.navigate(['paymentGateway']);
  }
  quantityChange(event){
    console.log(event);
    var id = event.target.id;
    var changedQuantity = event.target.value;
    var value = JSON.parse(this.localStorage.getProductsData().productIds);
    for(let val of value){
      if(val.id == id)
      {
        console.log("value found");
        val.quantity = changedQuantity;
      }
    }
    this.localStorage.saveProductsData(JSON.stringify(value));
    this.products = [];
    this.getProducts();
  }

}
