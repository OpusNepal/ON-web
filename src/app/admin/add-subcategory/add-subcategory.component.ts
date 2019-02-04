import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { AdminService } from '../admin.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap"
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css']
})
export class AddSubcategoryComponent implements OnInit {

  adminSubscription: Subscription;
  categorySubscription: Subscription;
  categories

  @ViewChild('content')
  private content;

  constructor(private adminService: AdminService, private modalService: NgbModal) { }

  ngOnInit() {
    this.categorySubscription = this.adminService.getCategories().subscribe((res) => {
      this.categories = res;
      console.log(this.categories)
    });
  }

  addSubcategory(subcategory: string, categoryId: Number) {
    this.adminSubscription = this.adminService.addSubcategory(subcategory, categoryId).subscribe(() => {
      this.open(this.content) 
    });
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title'})
  }

  ngOnDestroy() {
    this.categorySubscription.unsubscribe();
    if (this.adminSubscription) {
      this.adminSubscription.unsubscribe();
    }
  }
}
