import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/auth/user.service';
import { MyCustomArt } from '../../app-models/my-custom-art';
import { environment } from 'src/environments/environment';
import { AdminService } from '../admin.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap"

@Component({
  selector: 'app-delivered-arts',
  templateUrl: './delivered-arts.component.html',
  styleUrls: ['./delivered-arts.component.css']
})
export class DeliveredArtsComponent implements OnInit {

  deliveredArts: MyCustomArt[]

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
        if (myCustomArt.isDelivered) {
          return myCustomArt
        }
      });

      this.deliveredArts = data.filter(art => art);
      console.log(this.deliveredArts)
    });
  }

  changeStatus() {
    this.adminService.changeDeliveryStatus(this.selectedArt, false).subscribe((res) => {
      this.deliveredArts = this.deliveredArts.filter(art => art.id !== this.selectedArt);
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
      this.deliveredArts = this.deliveredArts.filter(art => art.id !== this.selectedArt);
      this.message = "Custom art deleted successfully";
      this.open(this.success);
    })
  }

}
