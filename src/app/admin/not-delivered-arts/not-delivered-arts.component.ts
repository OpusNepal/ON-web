import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/auth/user.service';
import { MyCustomArt } from '../../app-models/my-custom-art';
import { environment } from 'src/environments/environment';
import { AdminService } from '../admin.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap"

@Component({
  selector: 'app-not-delivered-arts',
  templateUrl: './not-delivered-arts.component.html',
  styleUrls: ['./not-delivered-arts.component.css']
})
export class NotDeliveredArtsComponent implements OnInit {

  undeliveredArts: MyCustomArt[]
  selectedArt: Number
  message = ""

  @ViewChild('success')
  private success;

  constructor(private userService: UserService, private adminService: AdminService, private modalService: NgbModal) { }

  ngOnInit() {
    this.userService.getAllCustomArt().subscribe(res => {
      let clonedRes: MyCustomArt[] = JSON.parse(JSON.stringify(res));
      let data  = clonedRes.map((myCustomArt) => {
        myCustomArt.Image = environment.public + myCustomArt.Image;
        myCustomArt.default_address = JSON.parse(myCustomArt.default_address)
        if (!myCustomArt.isDelivered) {
          return myCustomArt
        }
      });

      this.undeliveredArts = data.filter(art => art);
    });
  }

  changeStatus() {
    this.adminService.changeDeliveryStatus(this.selectedArt, true).subscribe((res) => {
      this.undeliveredArts = this.undeliveredArts.filter(art => art.id !== this.selectedArt);
      this.message = "Delivery status changed successfully!";
      this.open(this.success);
    });
  }

  setArtId(artId: Number) {
    this.selectedArt = artId;
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title'})
  }

  deleteArt() {
    this.userService.deleteCustomArt(this.selectedArt).subscribe(res => {
      this.undeliveredArts = this.undeliveredArts.filter(art => art.id !== this.selectedArt);
      this.message = "Custom art deleted successfully";
      this.open(this.success);
    })
  }

}
