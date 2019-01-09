import { Injectable } from '@angular/core';
import { AuthModel } from './auth.model';
import { HttpClient } from '@angular/common/http'; 
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isAuthenticated = false;
  private token = '';

  constructor(public http: HttpClient) { }

  getToken() {
    return this.token;
  }

  signUp(user) {
    const userData = {
      email: user.email,
      password: user.password
    };

    return this.http.post(environment.api+"auth/register", userData);
       
  }

  login(user: AuthModel) {
    return this.http.post<{data: {data: {}}}>(environment.api+"auth/login", user);
  }

}
