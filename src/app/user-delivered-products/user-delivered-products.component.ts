import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../auth/user.service';
import { UserDeliveryResponse, DeliveryProduct } from '../app-models/UserDeliveryResponse';
import { environment } from '../../environments/environment';
import { NgbModal, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { LocalStorageService } from '../auth/local-storage.service';


@Component({
  selector: 'app-user-delivered-products',
  templateUrl: './user-delivered-products.component.html',
  styleUrls: ['./user-delivered-products.component.css'],
  providers: [NgbRatingConfig]

})
export class UserDeliveredProductsComponent implements OnInit{
products: UserDeliveryResponse[]
selectedProduct: UserDeliveryResponse

selectedProductId: Number
message = ""
showProduct = false
currentRate = 5

@ViewChild('success')
private success;

constructor(private userService: UserService,private localstorage:LocalStorageService, private modalService: NgbModal, private router: Router, public ratingConfig: NgbRatingConfig) {
  ratingConfig.max = 5;
}

ngOnInit() {
  this.userService.getMyDeliveredProduct(this.localstorage.getAuthData().userId).subscribe(res => {
    let clonedRes = JSON.parse(JSON.stringify(res));

    console.log(clonedRes)
    let data = clonedRes.map((product) => {
      product.default_address = JSON.parse(product.default_address)
      product.created_at = new Date(product.created_at).toLocaleString()
      product.delivery_products = product.delivery_products.map((item) => {
        if (!item.rating) {
          item.rating = 0;
        }
        item.products.image = environment.public + item.products.image
        return item
      })
    return product;
    })

    this.products = data.filter(product => product)
    console.log(this.products)
  })
}



changeStatus() {
  // this.adminService.changeDeliveryStatus(this.selectedArt, false).subscribe((res) => {
  //   this.deliveredArts = this.deliveredArts.filter(art => art.id !== this.selectedArt);
  //   this.message = "Delivery status changed successfully!";
  //   this.open(this.success);
  // });
}

setArtId(id: Number) {
  this.selectedProductId = id;
}

open(content) {
  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
}

deleteArt() {
  // this.userService.deleteCustomArt(this.selectedArt).subscribe(res => {
  //   this.deliveredArts = this.deliveredArts.filter(art => art.id !== this.selectedArt);
  //   this.message = "Custom art deleted successfully";
  //   this.open(this.success);
  // })
}

toggleShowProducts(product) {
  this.showProduct = !this.showProduct
  console.log("[r",product);
  this.selectedProduct = product
}

viewProductDetail(productId: Number) {
  // navigate to the profile page
  this.router.navigate(['product-view'], { queryParams: { productId } });
}

rateChanged(rating: Number, productId: Number) {
  const { userId } = this.localstorage.getAuthData();
  this.userService.rateProduct(rating, productId, Number(userId)).subscribe((res) => {
    console.log(res)
  });


}

}
