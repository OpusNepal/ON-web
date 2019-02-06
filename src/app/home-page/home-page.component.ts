import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../auth/user.service';
import { ProductCategory } from '../app-models/productCategory.model';
import { SubcategoryProducts } from '../app-models/subcategoryProducts.model';
import { ProductSubCategory } from '../app-models/productSubCategory.model';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [NgbCarouselConfig] 
})
export class HomePageComponent implements OnInit {

  images: Array<String> = [ "./assets/images/thumb/reckless.jpg","./assets/images/thumb/kiranmural4.jpg","./assets/images/thumb/paintbkt.jpg"];
  productCategories: ProductCategory[];
  productSubCategories: ProductSubCategory[];
  todaysCategory: number;
  subcategoryProductsList: Array<SubcategoryProducts> = [];
  categoryList: Array<number> = [];

  constructor(config: NgbCarouselConfig, public userService: UserService) {
    config.interval = 3000;
    config.keyboard = false;
    config.pauseOnHover = false;
   }

  ngOnInit() {
   
   
    this.userService.getCategories().subscribe((res) => {
      this.productCategories = res;
      this.productCategories.forEach(row =>{
        this.categoryList.push(row.id);
      });
      // For now getting dubcategories of first category in db
      this.userService.getSubCategories(this.categoryList[0]).subscribe(res =>
        {
          this.productSubCategories = res;
          this.productSubCategories.forEach(row =>{
            let subcategoryProduct: SubcategoryProducts = new SubcategoryProducts();
            console.log(row.subCategory);
            subcategoryProduct.subcategory = row.subCategory;
            this.userService.getProductsOfSubCategory(row.id).subscribe(
              res =>{
                // console.log(res);
                res.forEach(row =>{
                  row.image = environment.files + row.image;
                  subcategoryProduct.subcategoryProducts.push(row);
                });
                console.log(subcategoryProduct);
                this.subcategoryProductsList.push(subcategoryProduct);
              }
            );
           
          });
  
        });
        console.log(this.subcategoryProductsList);
     });
        
  }

  viewProductDetail(event){
      console.log(event);
      var target = event.target || event.srcElement || event.currentTarget;
      var value = target.innerHTML;
      console.log(value);
  }
  public test(value){
    console.log(value);
  }

}
