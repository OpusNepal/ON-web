import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../auth/user.service';
import { ProductCategory } from '../app-models/productCategory.model';
import { SubcategoryProducts } from '../app-models/subcategoryProducts.model';
import { ProductSubCategory } from '../app-models/productSubCategory.model';
import { environment } from 'src/environments/environment';
import { ArtistOfTheWeek } from '../admin/artist';
import { AdminService } from '../admin/admin.service';
import { Router } from '@angular/router';

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

  artistOfTheWeek: ArtistOfTheWeek;

  constructor(config: NgbCarouselConfig, public userService: UserService, private adminService: AdminService,  private router: Router) {
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
        console.log("asdgafsdgasgdfgsa")
        console.log(this.subcategoryProductsList);
     });

  
     this.adminService.getArtistOfWeek().subscribe((res) => {
        let clonedRes: ArtistOfTheWeek = JSON.parse(JSON.stringify(res));

        clonedRes.users.profile.CV = environment.public + clonedRes.users.profile.CV;
        clonedRes.users.profile.samplepic = environment.public + clonedRes.users.profile.samplepic;
        clonedRes.users.profile.profilepic = environment.public + clonedRes.users.profile.profilepic;
        
        this.artistOfTheWeek = clonedRes;
     });
        
  }

  showProfileForArtistOfTheWeek() {
    // navigate to show the profile of the artist of the week
    // TODO
    const id = this.artistOfTheWeek.id
    // this.router.navigate(['profile-page'],{ queryParams: {userId: id}});
    console.log(this.artistOfTheWeek.id)
  }

}
