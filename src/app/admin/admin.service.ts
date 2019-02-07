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
    return this.http.get<Artist[]>(environment.api + "admin/getprofile");
    //return of(mockArtists);  
  }

  verifyArtist(id: Number) {
    return this.http.put(environment.api + `admin/verifyaccount/${id}`, null);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.api + 'admin/getproducts');
    //return of(mockProducts);
  }

  verifyProduct(id: Number) {
    return this.http.put(environment.api + `admin/verifyproduct/${id}`, null);
  }

  getVerifiedArtists(): Observable<Artist[]> {

    //add api to get verified artist
    return of(mockArtists);
  }

  addCategory(category: string): Observable<any> {
    return this.http.post(environment.api + `category`, {category});
    // add api to add category
    //console.log(category)
    //return of(true)
  }

  getCategories() : any {
    return this.http.get(environment.api + 'category');
  }

  addSubcategory(subcategory: string, categoryId: Number): Observable<any> {
//     console.log(subcategory, categoryId)
//     return of(true)
    return this.http.post(environment.api + `category/createsubCategory`, {subCategory: subcategory, categoryId});
    // add api to add sub category
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
  
}
