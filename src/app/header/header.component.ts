import { Component, OnInit, Input } from '@angular/core';
import { LocalStorageService } from '../auth/local-storage.service';
import { UserProductModel } from '../app-models/user-product.model';
import { UserService } from '../auth/user.service';
import { CategoryAndSubCategoryModel } from '../app-models/CategoryAndSubCat.model';
import { ProductCategory } from '../app-models/productCategory.model';
import { ProductSubCategory } from '../app-models/productSubCategory.model';
import { NavbarService } from '../navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  modalReference: any;
  closeResult: any;
  Categories : ProductCategory[];
  SubCategories : ProductSubCategory[];
  List: Array<CategoryAndSubCategoryModel> = [];

  constructor(public localStorage: LocalStorageService, public userService: UserService, public navbarService: NavbarService, private router: Router) { }

  ngOnInit() {
    
    this.userService.getCategories().subscribe(res =>{
      this.Categories = res;
      this.Categories.forEach(row => {
        let model = new CategoryAndSubCategoryModel();
        // console.log(row.Category);
        model.category = row.Category;
        this.userService.getSubCategories(row.id).subscribe(res =>{
          this.SubCategories = res;
          // console.log(this.SubCategories);
          this.SubCategories.forEach(row =>{
           
            model.subcategories.push(row.subCategory);
          
          });
             
        });
        this.List.push(model);
      } );
    });
   
  }



  logoutEvent(){
    this.localStorage.clearAuthData();
    this.navbarService.setShowLogout(false);
    this.navbarService.setShowLogin(true);
    this.navbarService.setShowSignup(true);
    this.navbarService.setShowDashboard(false);
    this.navbarService.setShowProfile(false);
    this.navbarService.setShowCart(false);
    this.navbarService.setShowUploadProduct(false);
    //this.userService.setAllowRating(false);
    this.navbarService.setShowWishlist(false);
    }
  
}
