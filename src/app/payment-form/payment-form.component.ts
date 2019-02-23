import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from '../auth/local-storage.service';
import { UserService } from '../auth/user.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  productIds: Array<number>;
  productDetails: any;
  products: Array<any> = [];
  subTotal: number = 0;
  shipping: number = 0;

  PaymentForm = new FormGroup({
    address_line_1 : new FormControl(''),
    address_line_2 : new FormControl(''),
    country : new FormControl(''),
    city : new FormControl(''),
    province : new FormControl(''),
    postal_code : new FormControl(''),
    alt_address : new FormControl(''),
    alt_phone : new FormControl('')
  });

  constructor(public formBuilder: FormBuilder, public localStorage: LocalStorageService, public userService: UserService, public router: Router) { }

  ngOnInit() {
    this.getProducts();
    // this.createForm();
  }
  // private createForm(): void {
  //   this.PaymentForm = this.formBuilder.group({
  //     address_line_1: ['', [Validators.required]],
  //     address_line_2: ['', [Validators.required]],
  //     country: ['', Validators.required],
  //     city: ['',Validators.required],
  //     province: ['',Validators.required],
  //     postal_code: ['',Validators.required],
  //     alt_address: ['',Validators.required],
  //     alt_phone: ['',Validators.required]
      
  //   });
  // }

  getProducts(){
  
    this.subTotal = 0;
    this.shipping = 0;
    if(this.localStorage.getProductsData() != null){
      this.productIds = JSON.parse(this.localStorage.getProductsData().productIds);
      for(let id of this.productIds){
        this.userService.getProductDetail(id).subscribe(res => {
            this.productDetails = res;
            this.productDetails.image = environment.files + this.productDetails.image;
            this.subTotal = this.subTotal + Number(this.productDetails.price);
            console.log(this.subTotal);
            this.shipping = this.shipping + 100;
            this.products.push(this.productDetails);
        });
        
      }
    }
  }
  removeFromCart(event){
    console.log(event);
    let prodId = event.target.id;
    console.log(prodId);
    this.productIds = this.productIds.filter(item => 
      item !== prodId
    
    );
    console.log(this.productIds);
    this.localStorage.saveProductsData(JSON.stringify(this.productIds));
    this.products = [];
    this.getProducts();
  }

  onSubmit(){
    console.log(this.PaymentForm.value);
  }

}
