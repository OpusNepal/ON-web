import { Injectable } from '@angular/core';
import { AuthModel } from './auth.model';
import { HttpClient } from '@angular/common/http'; 
import { environment } from '../../environments/environment';
import { ProfileModel } from '../app-models/profile.model';
import { ProfilePageModel } from '../app-models/profile-page.model';
import { ProductOfSubcategory } from '../app-models/productsOfSubcategoryResponse.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { WishlistProduct } from '../app-models/wishlist-product';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isAuthenticated = false;
  private token = '';
  private allowRating = new BehaviorSubject<boolean>(false);

  constructor(public http: HttpClient) { }

  getToken() {
    return this.token;
  }

  setToken(token: string) {
    this.token = token;
  }

  signUp(userData) {
    console.log(userData)
    return this.http.post<{data: {data: {id: string, email: string}, message: string, type: string}}>(environment.api+"auth/register", userData);
  }

  login(user: AuthModel) {
    return this.http.post<{data: {data: {email: string, id:Number, token:string, userType:string}}}>(environment.api + "auth/login", user);
  }

  updateProfile(userId, user) {
   
    return this.http.put(environment.api + `profile/${userId}`, user);

  }

  public getProfile(userId) : Promise<any> {
    return this.http.get(environment.api + 'profile/' + userId).toPromise();
  }

  getProductsofUser(userId) : Promise<any> {
    return this.http.get(environment.api + 'products/getProductUser/'+ userId).toPromise();
  }
  
  getCategories() : any {
    return this.http.get(environment.api + 'category');
  }

  getSubCategories(id) : any{
    return this.http.get(environment.api + 'category/'+ id + '/getSubcategory');
  }

  uploadProduct(product) : any{
    return this.http.post(environment.api + 'products',product);
  }

  getProductsOfSubCategory(id) : any{
    return this.http.get(environment.api + 'products/getproductsubCategory/' + id);
  }

  getProductDetail(id) : any{
    return this.http.get(environment.api + 'products/' + id);
  }

  rateProduct(rating: Number, productId: Number, userId: Number) {
    const body = {rating, productId, userId };
    return this.http.post(environment.api + "products/rating/", body)
  }

  getAllowRating() {
    return this.allowRating.asObservable();
  }

  setAllowRating(flag: boolean) {
    this.allowRating.next(flag);
  }

  setWishlistItem(userId: Number, productId: Number) {
    return this.http.post(environment.api + 'wishlist/', { userId, productId })
  }

  getWishlistItems(userId: Number): Observable<WishlistProduct[]> {
    return this.http.get<WishlistProduct[]>(environment.api + `wishlist/${userId}`);
  }

  deleteWishlistItem(userId: Number, productId: Number) {
    return this.http.put(environment.api + 'wishlist/delete/', { userId, productId })
  }

  checkout(paymentData): any{
    console.log(paymentData);
    console.log(environment.api + 'delivery');
    return this.http.post(environment.api + 'delivery', paymentData)
  }

  updateUser(userDetail, userId): Promise<any>{
    console.log(userDetail);
    return this.http.put(environment.api + 'users/' + userId , userDetail).toPromise();
  }
  
  editProfile(profileDetail, userId): Promise<any>{
    console.log(profileDetail);
    return this.http.put(environment.api + 'profile/updateProfile/' + userId , profileDetail).toPromise();

  }

  changeProfilePicture(userId,profilePic){
    return this.http.put(environment.api + 'profile/updateProfilePic/' + userId , profilePic);
  }
}
