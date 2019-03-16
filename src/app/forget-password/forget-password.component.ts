import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl,AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../auth/user.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap"
import { NavbarService } from '../navbar.service';
import { NotificationService } from "../lib/notification/notification.service";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

 
  @ViewChild('content')
  private content;
 

    resetPasswordForm: FormGroup;
  
    email: FormControl;
  
   
  
  
    constructor(public formBuilder: FormBuilder,
       public userService: UserService,
       public router: Router,
         private modalService: NgbModal, 
         private navbarService: NavbarService, 
            private ns: NotificationService,
      ) { 
      this.createForm();

    }
  


  ngOnInit() {
  
  }


  private createForm(): void {

    this.email = this.formBuilder.control('', Validators.required)
    

    this.resetPasswordForm = this.formBuilder.group({
        email: this.email
     
      });
  }
   
  
 
  
  onSubmit(){
   
    this.userService.reset(this.resetPasswordForm.value).subscribe((res)=>{
        console.log(res);
      this.ns.success("Please check your email");
      this.email.reset();


    
    }, (err) => {
      if(err.status==404){
        this.ns.error("We were unable to find a user with that email.")
      }
      else{
        this.ns.error("Oops something went wrong")
      }
    
      console.log(err.status);
      
    });
   
    }
    
  




}
