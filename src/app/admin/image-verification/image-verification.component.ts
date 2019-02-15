import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Product } from '../products';
import { environment } from 'src/environments/environment';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap"


@Component({
  selector: 'app-image-verification',
  templateUrl: './image-verification.component.html',
  styleUrls: ['./image-verification.component.css']
})
export class ImageVerificationComponent implements OnInit {

  closeResult: string;

  rejectProductId: Number;
  rejectUserId: Number;

  products: Product[]

  constructor(private adminService: AdminService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.adminService.getProducts().subscribe((res) => {
      var clonedRes = JSON.parse(JSON.stringify(res));

      this.products = clonedRes.map(product => {
        product.image = environment.public + product.image;
        return product;
      });
    });

    console.log(this.products);
  }

  verifyProduct(id: Number) {
    console.log(id)
    
    this.adminService.verifyProduct(id).subscribe((res) => {
      this.products = this.products.filter(e => e.id !== id);
    });

  }

  setRejectIds(productId: Number, userId: Number) {
    this.rejectProductId = productId;
    this.rejectUserId = userId;
  }

  rejectProduct(comment: string) {
    this.adminService.rejectProduct(comment, this.rejectProductId, this.rejectUserId).subscribe((res) => {
      console.log('Rejected')
      this.products = this.products.filter(e => e.id !== this.rejectUserId);
    }); 

  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title'})
  }

}
