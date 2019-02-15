import { Component, OnInit } from '@angular/core';
import { UserService } from '../auth/user.service';
import { WishlistProduct } from '../app-models/wishlist-product';
import { LocalStorageService } from '../auth/local-storage.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  products: WishlistProduct[]

  constructor(private userService: UserService, private localStorageService: LocalStorageService, private router: Router) { }

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


  addToCart(productId: Number) {
    //TODO 
  }

  removeFromWishList(productId: Number) {
    const { userId } = this.localStorageService.getAuthData();

    this.userService.deleteWishlistItem(userId, productId).subscribe((res) => {
      //SUCCESS
      this.products = this.products.filter((item) => {
        return item.productId !== productId;
      });
    });
  }

  viewProductDetail(productId: Number) {
    // navigate to the profile page
    this.router.navigate(['product-view'], { queryParams: { productId }});
  }

}
