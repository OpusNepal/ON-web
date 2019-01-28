import { Component, OnInit } from '@angular/core';
import { mockArtists, Artist } from './../artist';
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

      var clonedRes = JSON.parse(JSON.stringify(res));

      this.artists = clonedRes.map(artist => {
        artist.profilepic = environment.public + artist.profilepic;
        artist.samplepic = environment.public + artist.samplepic;
        artist.CV = environment.public + artist.CV
        return artist;
      });
    });
    
    // var clonedArtists = JSON.parse(JSON.stringify(mockArtists));

    // this.artists = clonedArtists.map(data => {
    //       let artist = data;
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
