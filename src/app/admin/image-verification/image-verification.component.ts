import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Product } from '../products';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-image-verification',
  templateUrl: './image-verification.component.html',
  styleUrls: ['./image-verification.component.css']
})
export class ImageVerificationComponent implements OnInit {

  products: Product[]

  constructor(private adminService: AdminService) { }

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

}
