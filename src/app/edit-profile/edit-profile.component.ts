import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserService } from '../auth/user.service';
import { LocalStorageService } from '../auth/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  id: number;
  profileDetail: any;

  profileEditForm = new FormGroup({
    userDetail : new FormGroup({
      fullName : new FormControl(''),
      email: new FormControl(''),
      Phone: new FormControl(''),
    }),
    profileDetail : new FormGroup({
      streetName: new FormControl(''),
      expert: new FormControl(''),
      role: new FormControl(''),
      bio: new FormControl(''),
    })
  });
  
  constructor(public userService: UserService, public localStorage: LocalStorageService, private formBuilder: FormBuilder , private router: Router) { }

  ngOnInit() {
    this.id = this.localStorage.getAuthData().userId;
    Promise.all([this.userService.getProfile(this.id)]).then(res =>{
      this.profileDetail = res[0];
      this.createForm();

    });
  }
  
  createForm(){
    this.profileEditForm = this.formBuilder.group({
      userDetail : this.formBuilder.group({
        fullName: [this.profileDetail.fullName],
        email:[this.profileDetail.email],
        Phone:[this.profileDetail.Phone],
      }),
      profileDetail : this.formBuilder.group({
        streetName: [this.profileDetail.streetName],
        expert: [this.profileDetail.expert],
        role: [this.profileDetail.role],
        bio: [this.profileDetail.bio],
      })
     

    })
  }
  onSubmit(){
    Promise.all([this.userService.updateUser(this.profileEditForm.value.userDetail, this.id),this.userService.editProfile(this.profileEditForm.value.profileDetail , this.id)]).then(
      res => {
       
        this.router.navigate(['profile-page'])
      }
    ), (err) => {
      console.log(err);}
  }

}
