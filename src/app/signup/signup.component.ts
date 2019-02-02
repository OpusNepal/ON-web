import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../auth/user.service';
import { SignupModel } from './signup.model';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  signupModel: SignupModel;

  fullName: FormControl;
  email: FormControl;
  password: FormControl;
  Phone: FormControl;
  userType: FormControl;

  @ViewChild('content')
  private content;
 

  constructor(public formBuilder: FormBuilder, public userService: UserService, public router: Router,  private modalService: NgbModal) { 
  }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.fullName = this.formBuilder.control('', Validators.required)
    this.email = this.formBuilder.control('', Validators.required)
    this.password = this.formBuilder.control('', Validators.required)
    this.Phone = this.formBuilder.control('', Validators.required)
    this.userType = this.formBuilder.control('Customer', Validators.required)

    this.signupForm = this.formBuilder.group({
        fullName: this.fullName,
        email: this.email,
        password: this.password,
        Phone: this.Phone,
        userType: this.userType
      });
  }

  onSubmit() {
   
    console.log(this.signupForm.value);
    this.signupModel = this.signupForm.value;
    this.signupModel.isVerified = this.signupForm.value.userType === 'Artist' ? false: true;
    this.userService.signUp(this.signupModel).subscribe((res) => {
      console.log(res);
      const id = res.data.data.id;
      console.log(res.data.data.id);
      this.router.navigate(['profile'], { queryParams: {userId: id}});
    }, (err) => {
      this.open(this.content)
    });
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title'})
  }

}
