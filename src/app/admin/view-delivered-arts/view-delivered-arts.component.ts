import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/auth/user.service';
import { MyCustomArt } from 'src/app/app-models/my-custom-art';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-delivered-arts',
  templateUrl: './view-delivered-arts.component.html',
  styleUrls: ['./view-delivered-arts.component.css']
})
export class ViewDeliveredArtsComponent implements OnInit {

  deliveredArts: MyCustomArt[]

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllCustomArt().subscribe(res => {
      let clonedRes: MyCustomArt[] = JSON.parse(JSON.stringify(res));

      this.deliveredArts = clonedRes.map((myCustomArt) => {
        myCustomArt.Image = environment.public + myCustomArt.Image;

        if (myCustomArt.isDelivered) {
          return myCustomArt;
        }
        
      });

      console.log(this.deliveredArts)

    });
  }

}
