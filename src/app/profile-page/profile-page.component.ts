import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../auth/user.service';
import { environment } from 'src/environments/environment';
import { ProfilePageModel } from '../app-models/profile-page.model';
import { UserProductModel } from '../app-models/user-product.model';
import { LocalStorageService } from '../auth/local-storage.service';
import { NavbarService } from '../navbar.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
 
  @ViewChild('content')
  private content;
 

  id: String;
  profilePageModel : ProfilePageModel = new ProfilePageModel();
  imagePath: any;
  productImage: any;
  products: Array<UserProductModel> = [];
  url:any;
  profilePic: any;
  imgURL : any;
  modalReference: any;
  modalReferenceConfirm: any;
  message: String;
  productId: number;

  constructor(private route: ActivatedRoute,  public ratingConfig: NgbRatingConfig,public userService: UserService,public localStorage: LocalStorageService, public router: Router, public navbarService: NavbarService, private modalService: NgbModal) { 
    this.route.queryParams
      .subscribe(params => {
        if(params.id != null){
          this.id = params.id;
        }
        this.ngOnInit();
        
      });
      ratingConfig.max = 5;
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
        // console.log(this.profilePageModel);
        this.imagePath = environment.files + this.profilePageModel.profilepic;
        this.imgURL = this.imagePath;
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

  editProfile(){
    this.router.navigate(['edit-profile']);
  }

  open(content) {
    this.removeFadeClass();
    this.modalReference = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title'})
  }
  openConfirmation(content,event){
    this.removeFadeClass();
    this.modalReferenceConfirm = this.modalService.open(content,{ ariaLabelledBy: 'modal-basic-title'});
    this.productId = event.target.id;
    console.log(this.productId);
  }

  onSelectFile(files) { 
  
    this.profilePic = files[0];
    console.log(this.profilePic);
    if (files.length === 0)
    return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

  updateProfilePic(){
    const profilePicData = new FormData();
    profilePicData.append("profilepic",this.profilePic)
    this.userService.changeProfilePicture(this.id,profilePicData).subscribe(
        res=>{
          console.log(res);
          this.ngOnInit();
        }
      ), (err) => {
        console.log(err);
      };
     
      this.modalReference.close();
      
  }
  deleteProduct(){
    this.userService.deleteProduct(this.productId).subscribe(res=>{
      console.log(res);
      this.ngOnInit();
    }),(err)=>{
      console.log(err);
    }
    this.modalReferenceConfirm.close();
    
  }
  updateAvailability(event){
    this.router.navigate(['edit-product'],{queryParams: {productId : event.target.id}});
  }

  removeFadeClass(){
    var style = document.createElement('style');
    style.innerHTML =
      '.some-element {' +
        'color: purple;' +
        'background-color: #e5e5e5;' +
        'height: 150px;' +
      '}';
  }




}
