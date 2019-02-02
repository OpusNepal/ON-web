import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Artist } from '../artist';

@Component({
  selector: 'app-current-artist',
  templateUrl: './current-artist.component.html',
  styleUrls: ['./current-artist.component.css']
})
export class CurrentArtistComponent implements OnInit {

  verifiedArtists: Artist[];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getVerifiedArtists().subscribe((res) => {
      var clonedRes = JSON.parse(JSON.stringify(res));

      this.verifiedArtists = clonedRes;
    });
  }

}
