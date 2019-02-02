import { Component, OnInit } from '@angular/core';
import { artists, Artist } from './../artist';
import { AdminService } from '../admin.service';
import { environment } from 'src/environments/environment';;


@Component({
  selector: 'app-account-verification',
  templateUrl: './account-verification.component.html',
  styleUrls: ['./account-verification.component.css']
})
export class AccountVerificationComponent implements OnInit {

   artists: Artist[];

  constructor(public adminService: AdminService) {}
   

  ngOnInit() {
    this.adminService.getArtists().subscribe(res => {

      console.log(res);
      this.artists = res.map(artist => {
        artist.profilepic = environment.public + artist.profilepic;
        artist.samplepic = environment.public + artist.samplepic;
        artist.CV = environment.public + artist.CV
        return artist;
      });
    });
    
    // this.artists = artists.map(artist => {
    //       artist.profilepic = environment.public + artist.profilepic;
    //       artist.samplepic = environment.public + artist.samplepic;
    //       artist.CV = environment.public + artist.CV
    //       return artist;
    //     });
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