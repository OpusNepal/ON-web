import { Component, OnInit, Input } from '@angular/core';
import { LocalStorageService } from '../auth/local-storage.service';
import { UserProductModel } from '../app-models/user-product.model';
import { UserService } from '../auth/user.service';
import { CategoryAndSubCategoryModel } from '../app-models/CategoryAndSubCat.model';
import { ProductCategory } from '../app-models/productCategory.model';
import { ProductSubCategory } from '../app-models/productSubCategory.model';
import { NavbarService } from '../navbar.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  modalReference: any;
  closeResult: any;
  name: String;

  Categories: ProductCategory[];
  SubCategories: ProductSubCategory[];
  List: Array<CategoryAndSubCategoryModel> = [];

  constructor(public localStorage: LocalStorageService, public userService: UserService, public navbarService: NavbarService, private router: Router) { }

  ngOnInit() {
    // if(this.localStorage.getAuthData() != null){
    //   this.name= this.localStorage.getAuthData().name;
    // }
    // else {
    //   this.name='Hello';
    // }
    this.name = this.localStorage.getAuthData() !== undefined ? this.localStorage.getAuthData().name : 'Hello';

    this.userService.getCategories().subscribe(res => {
      this.Categories = res;
      this.Categories.forEach(row => {
        const model = new CategoryAndSubCategoryModel();
        // console.log(row.Category);
        model.category = row.Category;
        this.userService.getSubCategories(row.id).subscribe(res => {
          this.SubCategories = res;
          // console.log(this.SubCategories);
          this.SubCategories.forEach(row => {

            model.subcategories.push(row.subCategory);
            model.subCategoryIds.push(row.id);

          });

        });
        this.List.push(model);
      } );
    });
    $('.Dropdown').on('click', function() {
      $(this).toggleClass('is-expanded');
    });

  }



  logoutEvent() {
    this.localStorage.clearAuthData();
    this.localStorage.clearProductsData();
    this.navbarService.setShowLogout(false);
    this.navbarService.setShowLogin(true);
    this.navbarService.setShowSignup(true);
    this.navbarService.setShowDashboard(false);
    this.navbarService.setShowProfile(false);
    this.navbarService.setShowCart(false);
    this.navbarService.setShowUploadProduct(false);
    // this.userService.setAllowRating(false);
    this.navbarService.setShowWishlist(false);
    this.navbarService.setshowresetpassword(false);
    }

    showProducts(event) {
      console.log(event.target.attributes.id);
      const id = event.target.attributes.id.value;
      console.log('<<<<<<<<', id);
      this.router.navigate(['all-products'], {queryParams: {subCategoryId : id}});
    }

}
