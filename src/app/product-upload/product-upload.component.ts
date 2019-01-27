import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../auth/user.service';
import { ProductCategory } from './productCategory.model';
import { LocalStorageService } from '../auth/local-storage.service';

@Component({
  selector: 'app-product-upload',
  templateUrl: './product-upload.component.html',
  styleUrls: ['./product-upload.component.css']
})
export class ProductUploadComponent implements OnInit {

  ProductUploadForm : FormGroup;
  Categories : ProductCategory[];
  SubCategories : ProductCategory[];
  selectedCategory: number;
  selectedSubCategory : string;
  productImage : File;
  userId : string;


  constructor(public formBuilder: FormBuilder, public userService : UserService, public localStorage : LocalStorageService) {
    this.createForm();
   }

  ngOnInit() {

    
    this.userService.getCategories().subscribe((res)=>
    {
      this.Categories = res;
      console.log(this.Categories);
    }, (err) => {
      console.log(err);
    }
    );

    this.userId = this.localStorage.getAuthData().userId;
    console.log(this.userId);
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
      availability: ['',Validators.required]
      
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
    productForm.append("buildOn", this.ProductUploadForm.value.builOn);
    productForm.append("price",this.ProductUploadForm.value.price);
    productForm.append("artistId", '1');
    productForm.append("subCategoryId", this.selectedSubCategory);
    productForm.append("availability",this.ProductUploadForm.value.availability);
    productForm.append("Name",this.ProductUploadForm.value.name);
    productForm.append("image",this.productImage);
    console.log(productForm);
    this.userService.uploadProduct(productForm).subscribe((res)=>{
        console.log(res);
    }, (err) => {
      console.log(err);
    });

  }



}
