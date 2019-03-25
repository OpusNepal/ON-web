import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../auth/user.service';
import { LocalStorageService } from '../auth/local-storage.service';
import { MyCustomArt } from '../app-models/my-custom-art';
import { environment } from 'src/environments/environment';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap"


@Component({
  selector: 'app-my-custom-art',
  templateUrl: './my-custom-art.component.html',
  styleUrls: ['./my-custom-art.component.css']
})
export class MyCustomArtComponent implements OnInit {

  customArts: MyCustomArt[]
  rejectCustomArtId: Number

  @ViewChild('success')
  private success;

  constructor(private userService: UserService, private localStorageService: LocalStorageService, private modalService: NgbModal) { }

  ngOnInit() {
    const { userId } = this.localStorageService.getAuthData()
    
    this.userService.getUserCustomArt(userId).subscribe(res => {
      let clonedRes: MyCustomArt[] = JSON.parse(JSON.stringify(res));

      this.customArts = clonedRes.map((myCustomArt) => {
        myCustomArt.Image = environment.public + myCustomArt.Image;
        myCustomArt.default_address = JSON.parse(myCustomArt.default_address)
        return myCustomArt;
      });


    });
  
  }

  setCancelCustomArtId(id: Number) {
    this.rejectCustomArtId = id
  }

  cancelOrder() {
    this.userService.deleteCustomArt(this.rejectCustomArtId).subscribe(() => {
      this.open(this.success)
    });
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title'})
  }

}
