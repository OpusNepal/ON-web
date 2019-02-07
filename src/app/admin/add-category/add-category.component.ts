import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { AdminService } from '../admin.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap"
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit, OnDestroy {

  adminSubscription: Subscription;


  @ViewChild('content')
  private content;

  constructor(private adminService: AdminService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  addCategory(category: string) {
    this.adminSubscription = this.adminService.addCategory(category).subscribe(() => {
      this.open(this.content) 
    });
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title'})
  }

  ngOnDestroy() {
    if (this.adminSubscription) {
        this.adminSubscription.unsubscribe();  
    }
  }

}
