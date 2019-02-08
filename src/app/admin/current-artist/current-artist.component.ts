import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../admin.service';
import { Artist } from '../artist';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap"

@Component({
  selector: 'app-current-artist',
  templateUrl: './current-artist.component.html',
  styleUrls: ['./current-artist.component.css']
})
export class CurrentArtistComponent implements OnInit {

  verifiedArtists: Artist[];

  message = "";


  @ViewChild('content')
  private content;

  constructor(private adminService: AdminService, private modalService: NgbModal) { }

  ngOnInit() {
    this.adminService.getVerifiedArtists().subscribe((res) => {
      var clonedRes = JSON.parse(JSON.stringify(res));

      this.verifiedArtists = clonedRes;
      this.verifiedArtists = clonedRes.map(artist => {
        artist.profile.profilepic = environment.public + artist.profile.profilepic;
        artist.profile.samplepic = environment.public + artist.profile.samplepic;
        artist.profile.CV = environment.public + artist.profile.CV
        return artist;
      });
    });
  }

  setArtistOfWeek(id: Number) {
    this.adminService.setArtistOfWeek(id).subscribe((res) => {
      this.message = "Success";
      this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title'})

    }, (err) => {
      this.message = "Could not complete operation";
      this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title'})

    });
  }
  
}
