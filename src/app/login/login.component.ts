import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../auth/user.service';
import { Route } from '@angular/compiler/src/core';
import { LocalStorageService } from '../auth/local-storage.service';
import { NavbarService } from '../navbar.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signinForm: FormGroup;

  email: FormControl;
  password: FormControl;

  showError = false;
  showMessage = "";

  constructor(public formBuilder: FormBuilder,
     public userService: UserService, public router: Router, public localStorageService: LocalStorageService, private navbarService: NavbarService) {
    this.createForm();
   }

  ngOnInit() {
    this.navbarService.setShowLogout(false);
    this.navbarService.setShowLogin(true);
    this.navbarService.setShowSignup(true);
    this.navbarService.setShowDashboard(false);
    this.navbarService.setShowProfile(false);
    this.navbarService.setShowCart(false);
    this.navbarService.setShowUploadProduct(false);
  }

  createForm(): void {
    this.email = this.formBuilder.control('', Validators.required)
    this.password = this.formBuilder.control('', Validators.required)

    this.signinForm = this.formBuilder.group({
        email: this.email,
        password: this.password
      });
  }

  onSubmit(): void {
    this.userService.login(this.signinForm.value).subscribe((res) => {
      console.log(res.data.data);
      const { email, id, token, userType } = res.data.data;
      this.userService.isAuthenticated = true;
      this.userService.setToken(token);
      this.localStorageService.saveAuthData(token, email, id, userType);

      this.router.navigate(['home'])

      this.navbarService.setShowLogin(false);
      this.navbarService.setShowSignup(false);
      this.navbarService.setShowLogout(true);

      if (userType === 'artist') {
        this.navbarService.setShowProfile(true)
        //this.userService.setAllowRating(false);
      } else if (userType === 'admin') {
        this.navbarService.setShowDashboard(true);
        //this.userService.setAllowRating(false);
      } else if (userType === 'customer') {
        this.navbarService.setShowCart(true);
        this.navbarService.setShowWishlist(true);
        //this.userService.setAllowRating(true);
      }
    //1  this.router.navigate(['profile-page'],{ queryParams: {userId: id}});
    }, (err) => {
      this.showMessage = err.error.error.message;
      this.showError = true
    });
  }

}
