import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../auth/user.service';
import { environment } from 'src/environments/environment';
import { ProfilePageModel } from '../app-models/profile-page.model';
import { UserProductModel } from '../app-models/user-product.model';
import { LocalStorageService } from '../auth/local-storage.service';
import { NavbarService } from '../navbar.service';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  id: String;
  profilePageModel : ProfilePageModel = new ProfilePageModel();
  imagePath: any;
  productImage: any;
  products: Array<UserProductModel> = [];

  constructor(private route: ActivatedRoute, public userService: UserService,public localStorage: LocalStorageService, public router: Router, public navbarService: NavbarService) { 
    this.route.queryParams
      .subscribe(params => {
        if(params.id != null){
          this.id = params.id;
        }
        this.ngOnInit();
        
      });
      
  }

  ngOnInit() {

      this.localStorage.getAuthData() == null ? this.router.navigate(['login']):this.id = this.localStorage.getAuthData().userId;
      this.productImage = environment.files;
      this.route.queryParams
      .subscribe(params => {
        if(params.id != null){
          this.id = params.id;
        }
        
      });

    Promise.all([this.userService.getProfile(this.id),this.userService.getProductsofUser(this.id)]).then(
      res => {
        this.profilePageModel = res[0];
        this.imagePath = environment.files + this.profilePageModel.profilepic;
        this.products = res[1];
        for (let product of this.products){
          product.image = environment.files + product.image;
        }
      }, (err) => {
        console.log(err);}
      
    )
    
  }
  viewProductDetail(event){
    console.log(event);
    var target = event.target || event.srcElement || event.currentTarget;
    var id = target.attributes.id.value;
    this.router.navigate(['product-view'], { queryParams: {productId: id}});
  }

}
