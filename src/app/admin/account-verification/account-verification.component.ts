import { Component, OnInit } from '@angular/core';
import {  Artist } from './../artist';
import { AdminService } from '../admin.service';
import { environment } from 'src/environments/environment';;

@Component({
  selector: 'app-account-verification',
  templateUrl: './account-verification.component.html',
  styleUrls: ['./account-verification.component.css']
})
export class AccountVerificationComponent implements OnInit {

  page = 2;
  artists: Artist[];

  constructor(public adminService: AdminService) {} 

  ngOnInit() {
    this.adminService.getArtists().subscribe(res => {

      console.log(res)
      var clonedRes = JSON.parse(JSON.stringify(res));

      console.log(clonedRes)
      this.artists = clonedRes.map(artist => {
        artist.profile.profilepic = environment.public + artist.profile.profilepic;
        artist.profile.samplepic = environment.public + artist.profile.samplepic;
        artist.profile.CV = environment.public + artist.profile.CV
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
