import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../auth/user.service';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signinForm: FormGroup;

  constructor(public fb: FormBuilder, public userService: UserService, public router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.userService.login(this.signinForm.value).subscribe((res) => {
      console.log(res);
    });;
  }

}
