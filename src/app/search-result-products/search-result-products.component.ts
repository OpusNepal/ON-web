import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../auth/user.service';
import { ProductOfSubcategory } from '../app-models/productsOfSubcategoryResponse.model';
import { environment } from 'src/environments/environment';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-search-result-products',
  templateUrl: './search-result-products.component.html',
  styleUrls: ['./search-result-products.component.css']
})
export class SearchResultProductsComponent implements OnInit {
  search: string;
  products: Array<ProductOfSubcategory>;
  constructor(public route: ActivatedRoute, public userService: UserService, public router: Router, public ratingConfig: NgbRatingConfig) {
    ratingConfig.max = 5;
   }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        // console.log(params);
        this.search = params.serial;
        this.userService.getProductsbysearch(this.search).subscribe(res => 
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
