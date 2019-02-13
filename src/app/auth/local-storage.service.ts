import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { NavbarService } from '../navbar.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private userService: UserService, private navbarService: NavbarService) {}

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
    const credentials = this.getAuthData();

    if (!credentials) {
      return;
    }

    const { userType } = credentials;
    if (userType === 'artist') {
      this.navbarService.setShowProfile(true);
      this.navbarService.setShowCart(false);
      this.navbarService.setShowDashboard(false);
      this.navbarService.setShowLogin(false);
      this.navbarService.setShowLogout(true);
      this.navbarService.setShowSignup(false);
    } else if (userType === 'Customer') {
      this.navbarService.setShowProfile(false);
      this.navbarService.setShowCart(true);
      this.navbarService.setShowDashboard(false);
      this.navbarService.setShowLogin(false);
      this.navbarService.setShowLogout(true);
      this.navbarService.setShowSignup(false);
      
    } else if (userType === 'admin') {
      this.navbarService.setShowProfile(false);
      this.navbarService.setShowCart(false);
      this.navbarService.setShowDashboard(true);
      this.navbarService.setShowLogin(false);
      this.navbarService.setShowLogout(true);
      this.navbarService.setShowSignup(false);

    }

    this.userService.setToken(credentials.token);
    this.userService.isAuthenticated = true;
  }

  saveProductsData(id){
    localStorage.setItem('productIds',id);
  }
  clearProductsData(): void{
    localStorage.removeItem('productIds');
  }
  getProductsData():{productIds} | null{
    const productIds = localStorage.getItem('productIds');
    if (!productIds) {
      return;
    }
    return {
     productIds
    };
  }

}
