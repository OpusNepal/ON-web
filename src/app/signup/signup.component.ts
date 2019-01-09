import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../auth/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public userService: UserService, public router: Router) { 

    this.createForm();
  }

  ngOnInit() {
  }

  private createForm(): void {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      email:['', [Validators.required]],
      password: ['', Validators.required],
      userType: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
    this.userService.signUp(this.signupForm.value).subscribe((res) => {
      console.log(res);
      this.router.navigate(['login']);
    }, (err) => {
      console.log(err);
    });
  }

}
