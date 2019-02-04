import { Injectable } from '@angular/core';
import { Observable,  BehaviorSubject } from 'rxjs';

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

  constructor() { }

  getShowSignup() {
    return this.showSignup.asObservable();
  }

  setShowSignup(flag: boolean) {
    this.showSignup.next(flag);
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

}
