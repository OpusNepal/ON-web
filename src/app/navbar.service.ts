import { Injectable } from '@angular/core';
import { Observable,  BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private showDashboard = new BehaviorSubject<boolean>(false);
  private showProfile = new BehaviorSubject<boolean>(false);
  private showLogout = new BehaviorSubject<boolean>(false);
  private showLogin = new BehaviorSubject<boolean>(true);
  private showSignup = new BehaviorSubject<boolean>(true);
  private showCart = new BehaviorSubject<boolean>(false);
  private showUploadProduct = new BehaviorSubject<boolean>(false);
  private showWishlist = new BehaviorSubject<boolean>(false);
  private showresetpassword = new BehaviorSubject<boolean>(false);
  private username = new BehaviorSubject<string>(!localStorage.getItem('name')?"Hello":localStorage.getItem('name'));


  constructor() { }

  getShowSignup() {
    return this.showSignup.asObservable();
  }

  setShowSignup(flag: boolean) {
    this.showSignup.next(flag);
  }
  getshowresetpassword() {
    return this.showresetpassword.asObservable();
  }

  setshowresetpassword(flag: boolean) {
    this.showresetpassword.next(flag);
  }

  getShowDashboard() {
    return this.showDashboard.asObservable();
  }
  
  setShowDashboard(flag: boolean) {
    this.showDashboard.next(flag)
  }

  getShowProfile() {
    return this.showProfile.asObservable();
  }
  
  setShowProfile(flag: boolean) {
    this.showProfile.next(flag)
  }

  getShowLogout() {
    return this.showLogout.asObservable();
  }
  
  setShowLogout(flag: boolean) {
    this.showLogout.next(flag)
  }

  getShowLogin() {
    return this.showLogin.asObservable();
  }
  
  setShowLogin(flag: boolean) {
    this.showLogin.next(flag)
  }

  getShowCart() {
    return this.showCart.asObservable();
  }
  
  setShowCart(flag: boolean) {
    this.showCart.next(flag)
  }
  getShowUploadProduct() {
    return this.showUploadProduct.asObservable();
  }
  
  setShowUploadProduct(flag: boolean) {
    this.showUploadProduct.next(flag)
  }

  getShowWishlist() {
    return this.showWishlist.asObservable();
  }

  setShowWishlist(flag: boolean) {
    this.showWishlist.next(flag);
  }

  getUsername() {
    return this.username.asObservable()
  }

  setUsername(username: string) {
    this.username.next(username)
  }

}
