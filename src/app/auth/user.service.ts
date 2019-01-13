import { Injectable } from '@angular/core';
import { AuthModel } from './auth.model';
import { HttpClient } from '@angular/common/http'; 
import { environment } from '../../environments/environment';

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

  signUp(user) {
    const userData = {
      email: user.email,
      password: user.password,
      userType: user.userType
    };

    return this.http.post(environment.api+"auth/register", userData);
       
  }

  login(user: AuthModel) {
    return this.http.post<{data: {data: {email: string, id:Number, token:string}}}>(environment.api + "auth/login", user);
  }

  updateProfile(user) {
    const profileData = {
      streetName: user.streetName,
      expert: user.expert,
      role: user.role,
      bio: user.bio,
      cv: user.cv,
      profilePic: user.profilePic,
      sampleArt: user.sampleArt,

    };
    return this.http.post(environment.api+"profile/",profileData);

  }

}
