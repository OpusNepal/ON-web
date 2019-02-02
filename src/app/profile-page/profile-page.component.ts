import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../auth/user.service';
import { environment } from 'src/environments/environment';
import { ProfilePageModel } from '../app-models/profile-page.model';
import { UserProductModel } from '../app-models/user-product.model';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  id: String;
  profilePageModel : ProfilePageModel;
  imagePath: any;
  productImage: any;
  products: Array<UserProductModel> = [];

  constructor(private route: ActivatedRoute, public userService: UserService) { }

  ngOnInit() {

    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.id = params.userId;
      });
      this.productImage = environment.files;

    Promise.all([this.userService.getProfile(this.id),this.userService.getProductsofUser(this.id)]).then(
      res => {
        this.profilePageModel = res[0];
        this.imagePath = environment.files + this.profilePageModel.profilepic;
        console.log(this.imagePath);
        this.products = res[1];
        console.log(this.products);
        for (let product of this.products){
          product.image = environment.files + product.image;
        }
      }, (err) => {
        console.log(err);}
      
    )
    
    
    
    
  }

}
