import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  constructor(public fb: FormBuilder,
     public userService: UserService, public router: Router, public localStorageService: LocalStorageService) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
     userType: ['Customer', Validators.required]
    });
  }

  onSubmit() {
    this.userService.login(this.signinForm.value).subscribe((res) => {
      console.log(res.data.data);
      const { email, id, token } = res.data.data;
      this.userService.isAuthenticated = true;
      this.userService.setToken(token);
      this.localStorageService.saveAuthData(token, email, id);
    });
  }

}
