import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../auth/user.service';
import { ProductCategory } from '../app-models/productCategory.model';
import { LocalStorageService } from '../auth/local-storage.service';
import { Router } from '@angular/router';
import { ProductSubCategory } from '../app-models/productSubCategory.model';

@Component({
  selector: 'app-product-upload',
  templateUrl: './product-upload.component.html',
  styleUrls: ['./product-upload.component.css']
})
export class ProductUploadComponent implements OnInit {

  ProductUploadForm : FormGroup;
  Categories : ProductCategory[];
  SubCategories : ProductSubCategory[];
  selectedCategory: number;
  selectedSubCategory : string;
  productImage : File;
  userId : string;


  constructor(public formBuilder: FormBuilder, public userService : UserService, public localStorage : LocalStorageService, public router: Router) {
    this.createForm();
   }

  ngOnInit() {

    this.localStorage.getAuthData() == null ? this.router.navigate(['login']):this.userId = this.localStorage.getAuthData().userId;
    this.userService.getCategories().subscribe((res)=>
    {
      this.Categories = res;
      console.log(this.Categories);
    }, (err) => {
      console.log(err);
    }
    );

    
  }
  private createForm(): void {
    this.ProductUploadForm = this.formBuilder.group({
      Category: ['', [Validators.required]],
      SubCategory: ['', [Validators.required]],
      product: ['', Validators.required],
      orientation: ['',Validators.required],
      buildOn: ['',Validators.required],
      price: ['',Validators.required],
      name: ['',Validators.required],
      availability: ['',Validators.required],
      size: ['',Validators.required],
      description: ['',Validators.required],
      medium: ['',Validators.required],
      weight: ['',Validators.required],

      
    });
  }

  selectCategory(event){
    console.log(event);
    console.log(this.selectedCategory);
    this.userService.getSubCategories(this.selectedCategory).subscribe((res)=>{
      console.log(res);
      this.SubCategories = res;
    }, (err) => {
      console.log(err);
    }
    );
  }
  selectSubCategory(event){
    console.log(this.selectedSubCategory);
  }

  onProductSelect(event){
    this.productImage = event.target.files[0];
  }

  onSubmit(){
    const productForm = new FormData();
    productForm.append("Orientation",this.ProductUploadForm.value.orientation);
    productForm.append("buildOn", this.ProductUploadForm.value.buildOn);
    productForm.append("price",this.ProductUploadForm.value.price);
    productForm.append("artistId", this.userId);
    productForm.append("subCategoryId", this.selectedSubCategory);
    productForm.append("availability",this.ProductUploadForm.value.availability);
    productForm.append("Name",this.ProductUploadForm.value.name);
    productForm.append("image",this.productImage);
    productForm.append("size",this.ProductUploadForm.value.size);
    productForm.append("description",this.ProductUploadForm.value.description);
    productForm.append("medium",this.ProductUploadForm.value.medium);
    productForm.append("weight",this.ProductUploadForm.value.weight);
    console.log(productForm);
    this.userService.uploadProduct(productForm).subscribe((res)=>{
        console.log(res);
        this.router.navigate(['profile-page']);
    
    }, (err) => {
      console.log(err);
    });

  }



}
