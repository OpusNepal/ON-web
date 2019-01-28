import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from '../../environments/environment';
import { Artist } from './artist';
import { Product } from './products';
import { Observable, of} from 'rxjs';
import { mockProducts } from './products';
import { mockArtists } from './artist';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getArtists(): Observable<Artist[]> {
     //return this.http.get<Artist[]>(environment.api + "admin/getprofile");
    return of(mockArtists);  
  }

  verifyArtist(id: Number) {
    return this.http.put(environment.api + `admin/verifyaccount/${id}`, null);
  }

  getProducts(): Observable<Product[]> {
    //return this.http.get<Product[]>(environment.api + 'admin/getproducts');
    return of(mockProducts);
  }

  verifyProduct(id: Number) {
    return this.http.put(environment.api + `admin/verifyproduct/${id}`, null);
  }
  
}
