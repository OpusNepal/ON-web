import { Component, OnInit } from '@angular/core';
import { artists, Artist } from './../artist';
import { DomSanitizer } from '@angular/platform-browser';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-account-verification',
  templateUrl: './account-verification.component.html',
  styleUrls: ['./account-verification.component.css']
})
export class AccountVerificationComponent implements OnInit {

  unverifiedArtists: Artist[];

  constructor(public sanitizer: DomSanitizer, public adminService: AdminService) {
    //this.unverifiedArtists = artists;
   }

  ngOnInit() {
    this.adminService.getArtists().subscribe(res => {
      this.unverifiedArtists = res;
    });
  }

  verifyArtist(artist: Artist): void {
    console.log(artist);
    this.adminService.verifyArtist(artist.id).subscribe(res => {
      console.log('Verified');
    });
  }

  rejectArtist(artist: Artist): void {
    this.unverifiedArtists = this.unverifiedArtists.filter(item => item.id !== artist.id);
  }

}
