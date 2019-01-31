import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Product } from '../products';
import { environment } from 'src/environments/environment';
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap"


@Component({
  selector: 'app-image-verification',
  templateUrl: './image-verification.component.html',
  styleUrls: ['./image-verification.component.css']
})
export class ImageVerificationComponent implements OnInit {

  closeResult: string;

  rejectProductId: Number;

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
    this.products = this.products.filter(e => e.id !== id);

  }

  setRejectProductId(id: Number) {
    console.log(id)
    this.rejectProductId = id;
  }

  rejectProduct(comment: string) {
    console.log(comment);
    console.log(this.rejectProductId);

  }


  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title'}).result
          .then((result) => {
            this.closeResult = `Closed with: ${result}`
          }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`
          });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
