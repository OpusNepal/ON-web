import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../auth/user.service';
import { SignupModel } from './signup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  signupModel: SignupModel;

  constructor(public formBuilder: FormBuilder, public userService: UserService, public router: Router) { 

    this.createForm();
  }

  ngOnInit() {
  }

  private createForm(): void {
    this.signupForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', Validators.required],
      Phone: ['', Validators.required],
      userType: ['Customer', Validators.required]
    });
  }

  onSubmit() {
    console.log("yeta pugyo");
    console.log(this.signupForm.value);
    this.signupModel = this.signupForm.value;
    this.signupForm.value.userType === 'Artist' ? this.signupModel.isVerified = false : this.signupModel.isVerified = true;
    this.userService.signUp(this.signupModel).subscribe((res) => {
      console.log(res);
      this.router.navigate(['profile']);
    }, (err) => {
      console.log(err);
    });
  }

}
