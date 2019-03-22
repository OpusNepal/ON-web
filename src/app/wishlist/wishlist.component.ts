import { Component, OnInit } from '@angular/core';
import { UserService } from '../auth/user.service';
import { WishlistProduct } from '../app-models/wishlist-product';
import { LocalStorageService } from '../auth/local-storage.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageDataModel } from '../app-models/localStorageData.model';



@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  products: WishlistProduct[]
  productIds: Array<LocalStorageDataModel> = [];
  duplicateProduct : Boolean = false;
  productId : LocalStorageDataModel = new LocalStorageDataModel();

  constructor(public ratingConfig: NgbRatingConfig,private userService: UserService, private localStorageService: LocalStorageService, private router: Router) { 
    ratingConfig.max = 5;

  }

  ngOnInit() {
    if (this.localStorageService.getAuthData()) {
      const { userId } = this.localStorageService.getAuthData();

    this.userService.getWishlistItems(userId).subscribe((res) => {
      console.log(res);
      let clonedRes = JSON.parse(JSON.stringify(res));

      this.products = clonedRes.map(product => {
        product.products.image = environment.public + product.products.image;
        return product;
      });
      
    });
    }  
  }


  addToCart(event){
    if(this.localStorageService.getProductsData() != null){
      var value = JSON.parse(this.localStorageService.getProductsData().productIds);
    }
    
     this.productId.quantity = 1;
     this.productId.id = event.target.attributes.id.value;
     if(value != null){
      this.productIds = value;
      for(let val of value){
        if(val.id == this.productId.id)
        {
          console.log("duplicate value found");
          this.duplicateProduct = true;
          val.quantity = val.quantity + 1;
        }
      }
     }
     console.log(this.productIds);
      if(!this.duplicateProduct){
      this.productIds.push(this.productId);
     
     }
     this.localStorageService.saveProductsData(JSON.stringify(this.productIds));
     this.router.navigate(['/cart']);
    
     
  }
  removeFromWishList(productId: Number) {
    const { userId } = this.localStorageService.getAuthData();

    this.userService.deleteWishlistItem(userId, productId).subscribe((res) => {
      //SUCCESS
      this.products = this.products.filter((item) => {
        return item.productId !== productId;
      });

      if (this.products.length <= 0) {
        
      }
    });
  }

  rateChanged(newRating: Number, productId: Number) {
    const { userId } = this.localStorageService.getAuthData();
    this.userService.rateProduct(newRating, productId, userId).subscribe((res) => {
      //console.log(res)
    });
  }
  viewProductDetail(productId: Number) {
    // navigate to the profile page
    this.router.navigate(['product-view'], { queryParams: { productId }});
  }

}
