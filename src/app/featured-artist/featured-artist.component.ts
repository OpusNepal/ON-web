import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../admin/admin.service';
import { Artist } from '../admin/artist';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap"
import { environment } from 'src/environments/environment';
import { Pipe, PipeTransform } from '@angular/core';
import {GrdFilterPipe} from '../lib/custompipe';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-featured-artist',
  templateUrl: './featured-artist.component.html',
  styleUrls: ['./featured-artist.component.css']
})
export class FeaturedArtistComponent implements OnInit  {

  verifiedArtists: Artist[];
  public searchText : string;

  message = "";


  @ViewChild('content')
  private content;

  constructor(private adminService: AdminService, private modalService: NgbModal,public router: Router) { }

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
  viewProfile(event){
    console.log(event);
    let artistId = event.target.id;
    this.router.navigate(['profile-page'],{queryParams:{id: artistId}});
  }  
}
