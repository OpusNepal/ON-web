import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(public userService: UserService) {}

  saveAuthData(token: string, email: string, userId: Number, userType: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
    localStorage.setItem('userType', userType)
    localStorage.setItem('userId', userId.toString());
  }

  clearAuthData(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('userId');
    localStorage.removeItem('userType')
    this.userService.isAuthenticated = false;
  }

  getAuthData(): { token, email, userId, userType } | null {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    const userId = localStorage.getItem('userId');
    const userType = localStorage.getItem('userType')
    if (!token) {
      return;
    }
    return {
      token,
      email,
      userId,
      userType
    };
  }

  autoAuthenticateUser(): void {
    const credintials = this.getAuthData();

    if (!credintials) {
      return;
    }

    this.userService.setToken(credintials.token);
    this.userService.isAuthenticated = true;
  }

}
