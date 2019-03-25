import { Injectable } from '@angular/core';
import { AuthModel } from './auth.model';
import { HttpClient } from '@angular/common/http'; 
import { environment } from '../../environments/environment';
import { ProfileModel } from '../app-models/profile.model';
import { ProfilePageModel } from '../app-models/profile-page.model';
import { ProductOfSubcategory } from '../app-models/productsOfSubcategoryResponse.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { WishlistProduct } from '../app-models/wishlist-product';
import { CustomArt } from '../app-models/custom-art';
import { MyCustomArt } from '../app-models/my-custom-art';
import {changePassword} from '../app-models/changePassword'
import { UserDeliveryResponse } from '../app-models/UserDeliveryResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  resetPassword=false;
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
    //console.log(userData)
    return this.http.post<{data: {data: {id: string, email: string}, message: string, type: string}}>(environment.api+"auth/register", userData);
  }

  login(user: AuthModel) {
    return this.http.post<{data: {data: {email: string, id:Number, token:string, userType:string,passwordreset:boolean,name:string}}}>(environment.api + "auth/login", user);
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
  getProductsbysearch(search) : any{
    return this.http.get(environment.api +  `search/${search}`);
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
   
    return this.http.post(environment.api + 'delivery', paymentData)
  } 
  requestCustomArt(data) {
    return this.http.post(environment.api + "customArt", data);
  }

  getAllCustomArt() {
    return this.http.get(environment.api + "customArt")
  }

  getUserCustomArt(userId: Number): Observable<MyCustomArt[]> {
    return this.http.get<MyCustomArt[]>(environment.api + `customArt/${userId}`)
  }

  deleteCustomArt(artId: Number) {
    return this.http.put(environment.api + `customArt/deletecustomArt/${artId}`, null)
  }

  updateUser(userDetail, userId): Promise<any>{
    return this.http.put(environment.api + 'users/' + userId , userDetail).toPromise();
  }
  
  editProfile(profileDetail, userId): Promise<any>{
    return this.http.put(environment.api + 'profile/updateProfile/' + userId , profileDetail).toPromise();

  }

  changeProfilePicture(userId,profilePic){
    return this.http.put(environment.api + 'profile/updateProfilePic/' + userId , profilePic);
  }

  deleteProduct(productId){
    return this.http.put(environment.api + 'products/delete/'  + productId , '');
  }

  updateProductAvailability(productId , prodAvail){
    return this.http.put(environment.api + 'products/updatavail/' + productId , prodAvail);
  }

  getNamesOfVerifiedArtist() {
    return this.http.get<any[]>(environment.api + 'users/getAllArtist')
  }

  changePassword(data,userId){
    return this.http.put(environment.api + `auth/resetpassword/${userId}`, data)

  }
  reset(data){
    return this.http.post(environment.api+`auth/reset`,data);
  }

  verify(){
    return this.http.get(environment.api+`auth/verify`);
  }

  getMyDeliveredProduct(userId: Number): Observable<UserDeliveryResponse[]> {
    return this.http.get<UserDeliveryResponse[]>(environment.api + `delivery/user/${userId}`)
  }
}
