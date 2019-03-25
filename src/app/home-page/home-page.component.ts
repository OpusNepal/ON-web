import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../auth/user.service';
import { ProductCategory } from '../app-models/productCategory.model';
import { SubcategoryProducts } from '../app-models/subcategoryProducts.model';
import { ProductSubCategory } from '../app-models/productSubCategory.model';
import { environment } from 'src/environments/environment';
import { ArtistOfTheWeek } from '../admin/artist';
import { AdminService } from '../admin/admin.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../auth/local-storage.service';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [NgbCarouselConfig, NgbRatingConfig]
})
export class HomePageComponent implements OnInit {

  images: Array<String> = [ "./assets/images/thumb/reckless.jpg","./assets/images/thumb/kiranmural4.jpg","./assets/images/thumb/paintbkt.jpg"];
  productCategories: ProductCategory[];
  productSubCategories: ProductSubCategory[];
  todaysCategory: number;
  subcategoryProductsList: Array<SubcategoryProducts> = [];
  categoryList: Array<number> = [];

  artistOfTheWeek: ArtistOfTheWeek;
  readonly = true;
  enableWishlist = false;

  constructor(config: NgbCarouselConfig, public ratingConfig: NgbRatingConfig, public userService: UserService, private adminService: AdminService,  private router: Router, private localStorageService: LocalStorageService) {
    config.interval = 3000;
    config.keyboard = false;
    config.pauseOnHover = false;
 
    ratingConfig.max = 5;

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
  
            subcategoryProduct.subcategory = row.subCategory;
            this.userService.getProductsOfSubCategory(row.id).subscribe(
              res =>{
                
                res.forEach(row =>{
                  row.image = environment.files + row.image;
                  subcategoryProduct.subcategoryProducts.push(row);
                });
               
                this.subcategoryProductsList.push(subcategoryProduct);
              }
            );
           
          });
  
        });

        // this.userService.getAllowRating().subscribe((res) => {
        //   if(!res) {
        //     this.readonly = true;
        //   } else {
        //     this.readonly = false;
        //   }
        // });

        if (this.localStorageService.getAuthData()) {
          const { userType } = this.localStorageService.getAuthData();
          if (userType === 'customer') {
            this.enableWishlist = true
          }
        }
        

     });

  
     this.adminService.getArtistOfWeek().subscribe((res) => {
       if (!res) {
         return
       }

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

  }
  
  viewProductDetail(productId: Number) {
    // navigate to the profile page
    this.router.navigate(['product-view'], { queryParams: { productId }});
  }
  showMore(event){
    var id = event.target.attributes.id.value;
    this.router.navigate(['all-products'],{queryParams : {subCategoryId : id}});
  }

  rateChanged(newRating: Number, productId: Number) {
    const { userId } = this.localStorageService.getAuthData();
    this.userService.rateProduct(newRating, productId, userId).subscribe((res) => {
    });
  }

  addToWishlist(productId: Number) {
    const { userId } = this.localStorageService.getAuthData();
    this.userService.setWishlistItem(userId, productId).subscribe((res) => {
      //Success
    });
  }
  viewProfile(event){
    let artistId = event.target.id;
    this.router.navigate(['profile-page'],{queryParams:{id: artistId}});
  }
  scroll(){
    window.scroll({
      top: 500, 
      left: 0, 
      behavior: 'smooth'
    });
  }
}
