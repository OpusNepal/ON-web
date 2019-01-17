import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from '../../environments/environment';
import { Artist } from './artist';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getArtists() {
     return this.http.get<Artist[]>(environment.api + "admin/getprofile");
  }

  verifyArtist(id: Number) {
    return this.http.put(environment.api + 'admin/verifyaccount/${id}', null);
  }
  
}
