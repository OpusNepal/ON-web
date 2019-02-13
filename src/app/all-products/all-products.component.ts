import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../auth/user.service';
import { ProductOfSubcategory } from '../app-models/productsOfSubcategoryResponse.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  id: number;
  products: Array<ProductOfSubcategory>;
  constructor(public route: ActivatedRoute, public userService: UserService) { }

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

}
