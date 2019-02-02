import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../auth/user.service';
import { SignupModel } from '../app-models/signup.model';


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
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      Phone: ['', [Validators.required]],
      userType: ['Customer', [Validators.required]]
    });
  }

  onSubmit() {
   
    console.log(this.signupForm.value);
    this.signupModel = this.signupForm.value;
    this.signupForm.value.userType === 'artist' ? this.signupModel.isVerified = false : this.signupModel.isVerified = true;
    this.userService.signUp(this.signupModel).subscribe((res) => {
      console.log(res);
      const id = res.data.data.id;
      console.log(res.data.data.id);
      this.signupForm.value.userType === 'artist' ? this.router.navigate(['profile'], { queryParams: {userId: id}}) : this.router.navigate(['login']);
    }, (err) => {
      console.log(err);
    });
  }

}
