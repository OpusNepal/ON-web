import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../auth/user.service';
import { ProductOfSubcategory } from '../app-models/productsOfSubcategoryResponse.model';
import { environment } from 'src/environments/environment';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  id: number;
  products: Array<ProductOfSubcategory>;
  constructor(public route: ActivatedRoute, public userService: UserService, public router: Router, public ratingConfig: NgbRatingConfig) {
    ratingConfig.max = 5;
   }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        // console.log(params);
        this.id = params.subCategoryId;
        console.log(this.id);
        this.userService.getProductsOfSubCategory(this.id).subscribe(res => 
          {
            console.log("here");
            this.products = res;
            this.products.forEach(row => {
              row.image = environment.files + row.image;
            });
          });
      });
   
    
  }
  viewProductDetail(event){
    console.log(event);
    var target = event.target || event.srcElement || event.currentTarget;
    var id = target.attributes.id.value;
    this.router.navigate(['product-view'], { queryParams: {productId: id}});
}

}
