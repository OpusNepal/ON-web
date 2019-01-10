import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(public userService: UserService) {}

  saveAuthData(token: string, email: string, userId: Number) {
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
    localStorage.setItem('userId', userId.toString());
  }

  clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('userId');
  }

  getAuthData() {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    const userId = localStorage.getItem('userId');

    if (!token) {
      return;
    }
    return {
      token,
      email,
      userId
    };
  }

  autoAuthenticateUser() {
    const credintials = this.getAuthData();

    if (!credintials) {
      return;
    }

    this.userService.setToken(credintials.token);
    this.userService.isAuthenticated = true;
  }

  

}
