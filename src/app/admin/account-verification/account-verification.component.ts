import { Component, OnInit } from '@angular/core';
import {  Artist } from './../artist';
import { AdminService } from '../admin.service';
import { environment } from 'src/environments/environment';;
import { NgbModal } from "@ng-bootstrap/ng-bootstrap"

@Component({
  selector: 'app-account-verification',
  templateUrl: './account-verification.component.html',
  styleUrls: ['./account-verification.component.css']
})
export class AccountVerificationComponent implements OnInit {

  currentRejectArtist: Artist;
  closeResult: string;

  artists: Artist[];

  constructor(private adminService: AdminService, private modalService: NgbModal) {} 

  ngOnInit() {
    this.adminService.getArtists().subscribe(res => {

      var clonedRes = JSON.parse(JSON.stringify(res));

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
      this.artists = this.artists.filter(e => e.id !== artist.id);
    });
    // this.artists = this.artists.filter(e => e.id !== artist.id);
    // console.log(this.artists);
    
  }

  setRejectArtist(artist: Artist) {
    this.currentRejectArtist = artist;
  }

  rejectArtist(comment: string): void {
    console.log(this.currentRejectArtist)
    console.log(comment)
    //this.unverifiedArtists = this.unverifiedArtists.filter(item => item.id !== artist.id);
  }


  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title'})
  }

}
