import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../auth/user.service';
import { environment } from 'src/environments/environment';
import { ProfilePageModel } from './profile-page.model';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  id: String;
  profilePageModel : ProfilePageModel;
  imagePath: any;

  constructor(private route: ActivatedRoute, public userService: UserService) { }

  ngOnInit() {

    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.id = params.userId;
      });

    // this.userService.getProfile(this.id).subscribe((res)=>{
    //     this.profilePageModel = res;
    //     console.log(this.profilePageModel);
    //     this.imagePath = environment.files + this.profilePageModel.profilepic;
    //     console.log(this.imagePath);
    // }, (err) => {
    //   console.log(err);}
    
    // );
    Promise.all([this.userService.getProfile(this.id),this.userService.getProductsofUser(this.id)]).then(
      res => {
        this.profilePageModel = res[0];
        console.log(this.profilePageModel);
        this.imagePath = environment.files + this.profilePageModel.profilepic;
        console.log(this.imagePath);
        console.log(res[1]);
      }, (err) => {
        console.log(err);}
      
    )
    
    
    
  }

}
