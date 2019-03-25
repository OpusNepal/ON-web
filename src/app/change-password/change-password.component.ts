import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl,AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../auth/user.service';
import { changePassword } from '../app-models/changePassword';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap"
import { NavbarService } from '../navbar.service';
import { LocalStorageService } from '../auth/local-storage.service';
import { NotificationService } from "../lib/notification/notification.service";





@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  

    changePasswordForm: FormGroup;
    changePasswordModel: changePassword;
  
    oldPassword: FormControl;
    newPassword: FormControl;
    newPasswordAgain: FormControl;
    userId : string;
    showError = false;
  showMessage = "";

   
  
  
    constructor(public formBuilder: FormBuilder, public userService: UserService,public localStorage : LocalStorageService, public router: Router,  private modalService: NgbModal, private navbarService: NavbarService,    private ns: NotificationService,
      ) { 
      this.createForm();

    }
  


  ngOnInit() {
    this.localStorage.getAuthData() == null ? this.router.navigate(['login']):this.userId = this.localStorage.getAuthData().userId;
  
  }


  private createForm(): void {

    this.oldPassword = this.formBuilder.control('', Validators.required)
    this.newPassword = this.formBuilder.control('', Validators.required)
    this.newPasswordAgain = this.formBuilder.control('', Validators.required)
  

    this.changePasswordForm = this.formBuilder.group({
        oldPassword: this.oldPassword,
        newPassword: this.newPassword,
        newPasswordAgain: this.newPasswordAgain
     
      });
  }
   
  
 
  
  onSubmit(){
    if(this.changePasswordForm.value.newPassword !=this.changePasswordForm.value.newPasswordAgain){
      this.showMessage = "Passwords do not match";
      this.showError = true
    }else{
    this.userService.changePassword(this.changePasswordForm.value,this.userId).subscribe((res)=>{
      this.ns.success("Password changed successfully");
      this.router.navigate(['login']);


    
    }, (err) => {
      if(err.status==401){
        this.ns.error("Old password is invalid")
      }
      else{
        this.ns.error("Oops something went wrong")
      }
    
      
    });
   
    }
    
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title'})
  }


}
