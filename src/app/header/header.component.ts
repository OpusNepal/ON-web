import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../auth/local-storage.service';
import { UserProductModel } from '../profile-page/user-product.model';
import { UserService } from '../auth/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  modalReference: any;
  closeResult: any;
  isLoggedIn: Boolean = false;

  constructor(public localStorage: LocalStorageService, public userService: UserService) { }

  ngOnInit() {
    if(this.userService.isAuthenticated){
      this.isLoggedIn = true;
    }
  }
  logoutEvent(){
    this.localStorage.clearAuthData();
    this.isLoggedIn = false;
  }
  
}
