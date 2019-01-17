import { Component, OnInit } from '@angular/core';
import { artists, Artist } from './../artist';
import { DomSanitizer } from '@angular/platform-browser';
import { AdminService } from '../admin.service';
import { environment } from 'src/environments/environment';;


@Component({
  selector: 'app-account-verification',
  templateUrl: './account-verification.component.html',
  styleUrls: ['./account-verification.component.css']
})
export class AccountVerificationComponent implements OnInit {

   artists: Artist[];

  constructor(public sanitizer: DomSanitizer, public adminService: AdminService) {
    //this.unverifiedArtists = artists;
   }

  ngOnInit() {
    this.adminService.getArtists().subscribe(res => {
      this.artists = res.map(artist => {
        artist.profilepic = environment.public + artist.profilepic;
        artist.samplepic = environment.public + artist.profilepic;
        artist.CV = environment.public + artist.CV
        return artist;
      });
    });
  }

  verifyArtist(artist: Artist): void {
    console.log(artist);
    this.adminService.verifyArtist(artist.id).subscribe(res => {
      console.log('Verified');
    });
  }

  rejectArtist(artist: Artist): void {
    //this.unverifiedArtists = this.unverifiedArtists.filter(item => item.id !== artist.id);
  }

}
