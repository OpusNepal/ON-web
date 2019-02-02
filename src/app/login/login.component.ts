import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../auth/user.service';
import { Route } from '@angular/compiler/src/core';
import { LocalStorageService } from '../auth/local-storage.service';


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

  constructor(public formBuilder: FormBuilder,
     public userService: UserService, public router: Router, public localStorageService: LocalStorageService) {
    this.createForm();
   }

  ngOnInit() {
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
    //1  this.router.navigate(['profile-page'],{ queryParams: {userId: id}});
    }, (err) => {
      this.showError = true
    });
  }

}
