import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { NavbarService } from '../navbar.service';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private userService: UserService, private navbarService: NavbarService) {}

  saveAuthData(token: string, email: string, userId: Number, userType: string,name:string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
    localStorage.setItem('userType', userType)
    localStorage.setItem('userId', userId.toString());
    localStorage.setItem('name',name);
  }

  clearAuthData(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('userId');
    localStorage.removeItem('userType');
    localStorage.removeItem('name');

    this.userService.isAuthenticated = false;
  }

  getAuthToken(): string | null {
    return localStorage.getItem('token');
  }
  getAuthData(): { token, email, userId, userType,name } | null {
  
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    const userId = localStorage.getItem('userId');
    const userType = localStorage.getItem('userType')
    const name1=localStorage.getItem('name');
    
    const name=name1!==null?name1.match(' ')?name1.split(" ")[0]:name1:name1;

    if (!token) {
      return;
    }
    return {
      token,
      email,
      userId,
      userType,
      name
    };
  }

  autoAuthenticateUser(): void {
    const credentials = this.getAuthData();

    if (!credentials) {
      return;
    }

    let { userType } = credentials;
this.navbarService.setshowresetpassword(true);
   
    userType = userType.toLowerCase()
    if (userType === 'artist') {
      this.navbarService.setShowProfile(true);
      this.navbarService.setShowCart(false);
      this.navbarService.setShowDashboard(false);
      this.navbarService.setShowLogin(false);
      this.navbarService.setShowLogout(true);
      this.navbarService.setShowSignup(false);
      //this.userService.setAllowRating(false);
      this.navbarService.setShowUploadProduct(true);
      this.navbarService.setShowWishlist(false);
    } else if (userType === 'customer') {
      this.navbarService.setShowProfile(false);
      this.navbarService.setShowCart(true);
      this.navbarService.setShowDashboard(false);
      this.navbarService.setShowLogin(false);
      this.navbarService.setShowLogout(true);
      this.navbarService.setShowSignup(false);
      this.navbarService.setShowUploadProduct(false);
      //this.userService.setAllowRating(true);
      this.navbarService.setShowWishlist(true);
    } else if (userType === 'admin') {
      this.navbarService.setShowProfile(false);
      this.navbarService.setShowCart(false);
      this.navbarService.setShowUploadProduct(false);
      this.navbarService.setShowDashboard(true);
      this.navbarService.setShowLogin(false);
      this.navbarService.setShowLogout(true);
      this.navbarService.setShowSignup(false);
      //this.userService.setAllowRating(false);
      this.navbarService.setShowWishlist(false);
    }

    this.userService.setToken(credentials.token);
    this.userService.isAuthenticated = true;
    this.navbarService.setisUserlogged(false);
  }

  saveProductsData(id){
    localStorage.setItem('productIds',id);
  }
  clearProductsData(): void{
    localStorage.removeItem('productIds');
  }
  getProductsData(): {productIds} | null{
    const productIds = localStorage.getItem('productIds');
    if (!productIds) {
      return;
    }
    return {
     productIds
    };
  }

}
