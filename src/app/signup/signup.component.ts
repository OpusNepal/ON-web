import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../auth/user.service';
import { SignupModel } from '../app-models/signup.model';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap"
import { NavbarService } from '../navbar.service';

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
 

  constructor(public formBuilder: FormBuilder, public userService: UserService, public router: Router,  private modalService: NgbModal, private navbarService: NavbarService) { 
  }

  ngOnInit() {
    this.createForm();
    this.navbarService.setShowLogout(false);
    this.navbarService.setShowLogin(true);
    this.navbarService.setShowSignup(true);
    this.navbarService.setShowDashboard(false);
    this.navbarService.setShowProfile(false);
    this.navbarService.setShowCart(false);
  }

  private createForm(): void {
    this.fullName = this.formBuilder.control('', Validators.required)
    this.email = this.formBuilder.control('', Validators.required)
    this.password = this.formBuilder.control('', Validators.required)
    this.Phone = this.formBuilder.control('', Validators.required)
    this.userType = this.formBuilder.control('customer', Validators.required)

    this.signupForm = this.formBuilder.group({
        fullName: this.fullName,
        email: this.email,
        password: this.password,
        Phone: this.Phone,
        userType: this.userType
      });
  }

  onSubmit() {
   
    const { userType } = this.signupForm.value
    
    this.signupModel = this.signupForm.value;
    this.signupModel.isVerified = this.signupForm.value.userType === 'artist' ? false: true;

    this.userService.signUp(this.signupModel).subscribe((res) => {
      console.log(res);
      if (userType === 'customer') {
        this.router.navigate(['login']);
      } else if (userType == 'artist') {
        const id = res.data.data.id;
        this.router.navigate(['profile'], { queryParams: {userId: id}});
      }
    }, (err) => {
      this.open(this.content)
    });
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title'})
  }

}
