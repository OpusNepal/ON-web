import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../admin.service';
import { AdminDeliveryResponse } from '../../app-models/AdminDeliveryResponse';
import { environment } from '../../../environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-delivered-product',
  templateUrl: './all-delivered-product.component.html',
  styleUrls: ['./all-delivered-product.component.css']
})
export class AllDeliveredProductComponent implements OnInit {

  products: AdminDeliveryResponse[]
  selectedProduct: AdminDeliveryResponse

  selectedProductId: Number
  message = ""
  showProduct = false

  @ViewChild('success')
  private success;

  constructor(private adminService: AdminService, private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
    this.adminService.getAllDeliveredProduct().subscribe(res => {
      let clonedRes = JSON.parse(JSON.stringify(res));

      //console.log(clonedRes)
      let data = clonedRes.map((product) => {
        product.default_address = JSON.parse(product.default_address)
        product.created_at = new Date(product.created_at).toLocaleString()
        product.delivery_products = product.delivery_products.map((item) => {
          item.products.image = environment.public + item.products.image
          return item
        })
        // if (product.isDelivered) {
        //   return product
        // }
        return product
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
    this.selectedProduct = product
  }

  viewProductDetail(productId: Number) {
    // navigate to the profile page
    this.router.navigate(['product-view'], { queryParams: { productId } });
  }

}
