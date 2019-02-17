import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from '../../environments/environment';
import { Artist, ArtistOfTheWeek } from './artist';
import { Product } from './products';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(environment.api + "admin/getprofile");
  }

  verifyArtist(id: Number) {
    return this.http.put(environment.api + `admin/verifyaccount/${id}`, null);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.api + 'admin/getproducts');
  }

  verifyProduct(id: Number) {
    return this.http.put(environment.api + `admin/verifyproduct/${id}`, null);
  }

  getVerifiedArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(environment.api + "admin/getVerifiedProfile");
  }

  addCategory(category: string): Observable<any> {
    return this.http.post(environment.api + `category`, {category});
  }

  getCategories() : any {
    return this.http.get(environment.api + 'category');
  }

  addSubcategory(subcategory: string, categoryId: Number): Observable<any> {
    return this.http.post(environment.api + `category/createsubCategory`, {subCategory: subcategory, categoryId});
  }

  rejectProduct(rejectMessage: string, productId: Number, userId:Number) {
    const body = {
      rejectMessage,
      id: userId
    };
    return this.http.put(environment.api + `admin/rejectproduct/${productId}`, body)
  }

  rejectAccount(userId: Number, rejectMessage: string) {
    const body = {
      id: userId,
      rejectMessage
    };
    return this.http.put(environment.api + `admin/rejectaccount/${userId}`, body);
  }
  
  setArtistOfWeek(id: Number) {
    return this.http.post(environment.api + 'users/ArtistOfWeek', { id })
  }

  getArtistOfWeek(): Observable<ArtistOfTheWeek> {
    return this.http.get<ArtistOfTheWeek>(environment.api + 'users/ArtistOfWeek')
  }

  changeDeliveryStatus(artId: Number, status: boolean) {
    return this.http.put(environment.api + `admin/customizedArtdelivery/${artId}`, { status})
  }

}
