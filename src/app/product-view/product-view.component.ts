import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../auth/user.service';
import { ProductOfSubcategory } from '../app-models/productsOfSubcategoryResponse.model';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../auth/local-storage.service';
import { UserProductModel } from '../app-models/user-product.model';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  id: number;
  userId: number;
  products: Array<UserProductModel> = [];
  productDetails: ProductOfSubcategory;
  productIds: Array<String> = [];
  isLoggedIn: Boolean = false;
  duplicateProduct : Boolean = false;

  constructor(private route: ActivatedRoute, private userService: UserService, public localStorage: LocalStorageService, public router: Router) { }

  ngOnInit() {
    this.duplicateProduct = false;
    this.localStorage.getAuthData() == null ? this.isLoggedIn = false : this.isLoggedIn = true;
    console.log(this.isLoggedIn);
    this.route.queryParams
      .subscribe(params => {
        // console.log(params);
        this.id = params.productId;
        // console.log(this.id);
        this.userService.getProductDetail(this.id).subscribe(res =>{
    
          this.productDetails = res;
          this.productDetails.image = environment.files + this.productDetails.image;
          this.userId = this.productDetails.user.id;
          // console.log(this.productDetails);
          // console.log(this.productDetails.image);
  
          this.userService.getProductsofUser(this.userId).then(res => {
            this.products = res;
            this.products = this.products.filter(item => 
              item.id !== this.productDetails.id
            );
            this.products.forEach(row =>{
  
                row.image = environment.files + row.image;
              
            });
            // console.log(this.products);
          });
        
        });
      });
      
  }
  addToCart(event){
    if(this.localStorage.getProductsData() != null){
      var value = JSON.parse(this.localStorage.getProductsData().productIds);
    }
     
     var productId = event.target.attributes.id.value;
     if(value != null){
      this.productIds = value;
      for(let val of value){
        if(val == productId)
        {
          console.log("duplicate value found");
          this.duplicateProduct = true;
        }
      }
     }
      if(!this.duplicateProduct){
      this.productIds.push(productId);
      this.localStorage.saveProductsData(JSON.stringify(this.productIds));
     }
    
     
  }
  viewProductDetail(event){
    console.log(event);
    var target = event.target || event.srcElement || event.currentTarget;
    var id = target.attributes.id.value;
    this.router.navigate(['product-view'], { queryParams: {productId: id}});
}

}
