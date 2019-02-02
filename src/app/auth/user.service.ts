import { Injectable } from '@angular/core';
import { AuthModel } from './auth.model';
import { HttpClient } from '@angular/common/http'; 
import { environment } from '../../environments/environment';
import { ProfileModel } from '../profile/profile.model';
import { ProfilePageModel } from '../profile-page/profile-page.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isAuthenticated = false;
  private token = '';

  constructor(public http: HttpClient) { }

  getToken() {
    return this.token;
  }

  setToken(token: string) {
    this.token = token;
  }

  signUp(userData) {
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

}
