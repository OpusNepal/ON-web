import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { UserService } from '../auth/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProductModel } from '../app-models/user-product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  ProductUpdateForm = new FormGroup({
    name : new FormControl(''),
    orientation: new FormControl(''),
    buildOn: new FormControl(''),
    price: new FormControl(''),
    availability: new FormControl(''),
  });

  productId: number;
  productDetail: UserProductModel;
  // defaultAvail: String;

  constructor(private formBuilder: FormBuilder, private userService : UserService, private route: ActivatedRoute, private router: Router) { 
   
    this.route.queryParams
      .subscribe(params => {
        if(params.productId != null){
          this.productId = params.productId;
        }
      });
  }

  ngOnInit() {

      this.getProductData();
    

  }
  private createForm(): void {
    this.ProductUpdateForm = this.formBuilder.group({
      orientation: [this.productDetail.Orientation,Validators.required],
      buildOn: [this.productDetail.buildOn,Validators.required],
      price: [this.productDetail.price,Validators.required],
      name: [this.productDetail.Name,Validators.required],
      availability: [this.productDetail.availability,Validators.required]
      
    });
}

getProductData(){
  this.userService.getProductDetail(this.productId).subscribe(res =>{
    this.productDetail = res;
    console.log("yo ho data", this.productDetail);
    // this.defaultAvail = this.productDetail.availability;
    this.createForm();
  })
}

onSubmit(){
  // const productUpdateData = new FormData();
  // productUpdateData.append("availability", this.ProductUpdateForm.value.availability);
  let postData = {
    "availability" : this.ProductUpdateForm.value.availability
  }
  this.userService.updateProductAvailability(this.productId,postData).subscribe(res =>{
    console.log(res);
    this.router.navigate(['profile-page']);
  })
}
}
