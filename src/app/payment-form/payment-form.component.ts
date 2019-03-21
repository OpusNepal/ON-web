import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from '../auth/local-storage.service';
import { UserService } from '../auth/user.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PaymentModel } from '../app-models/payment.model';
import {NotificationService} from '../lib/notification/notification.service';
import { LocalStorageDataModel } from '../app-models/localStorageData.model';
import * as $ from 'jquery';


@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  productIds: Array<LocalStorageDataModel>;
  productDetails: any;
  products: Array<any> = [];
  subTotal: number = 0;
  shipping: number = 0;
  paymentData: PaymentModel = new PaymentModel();

  PaymentForm = new FormGroup({
    address_line_1 : new FormControl('', Validators.required),
    address_line_2 : new FormControl('', Validators.required),
    country : new FormControl('', Validators.required),
    city : new FormControl('', Validators.required),
    province : new FormControl('', Validators.required),
    postal_code : new FormControl('', Validators.required),
    alt_address : new FormControl('', Validators.required),
    alt_phone : new FormControl('', Validators.required),
  });

  constructor(public formBuilder: FormBuilder,public ns:NotificationService, public localStorage: LocalStorageService, public userService: UserService, public router: Router) { }

  ngOnInit() {
    this.getProducts();
    var $radios = $('input[type="radio"][name="tabs"]')
    $('.next').click(function() {
      var $checked = $radios.filter(':checked');
      var $next = $radios.eq($radios.index($checked) + 1);
      if(!$next.length){
          $next = $radios.first();
      }
      $next.prop("checked", true);
    });
    $('.previous').click(function() {
      var $checked = $radios.filter(':checked');
      var $next = $radios.eq($radios.index($checked) - 1 );
      if(!$next.length){
          $next = $radios.first();
      }
      $next.prop("checked", true);
    });
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
      for(let prod of this.productIds){
        this.userService.getProductDetail(prod.id).subscribe(res => {
            this.productDetails = res;
            this.productDetails.image = environment.files + this.productDetails.image;
            this.productDetails.quantity = prod.quantity;
            this.subTotal = this.subTotal + Number(this.productDetails.price * this.productDetails.quantity);
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
      item.id !== prodId
    
    );
    console.log(this.productIds);
    this.localStorage.saveProductsData(JSON.stringify(this.productIds));
    this.products = [];
    this.getProducts();
  }

  onSubmit(){
   
    this.paymentData = this.PaymentForm.value;
    this.paymentData.buyer_id = this.localStorage.getAuthData().userId;
    this.paymentData.products = this.productIds;
    this.paymentData.totalPrice = this.subTotal + this.shipping;
    console.log(this.paymentData);
    this.userService.checkout(this.paymentData).subscribe(res =>{
      this.ns.success("Your delivery items are in process");
    this.localStorage.clearProductsData();
    this.router.navigate(['cart'])
      console.log(res);
    
    });
  }

  quantityChange(event){
    console.log(event);
    var id = event.target.id;
    var changedQuantity = event.target.value;
    var value = JSON.parse(this.localStorage.getProductsData().productIds);
    for(let val of value){
      if(val.id == id)
      {
        console.log("value found");
        val.quantity = changedQuantity;
      }
    }
    this.localStorage.saveProductsData(JSON.stringify(value));
    this.products = [];
    this.getProducts();
  }
  


}
