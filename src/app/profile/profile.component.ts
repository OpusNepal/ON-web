import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../auth/user.service';
import { LocalStorageService } from '../auth/local-storage.service';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

id: String;
cv: File;
profilePic: File;
sampleArt: File;
profileForm: FormGroup;
  constructor(private route: ActivatedRoute,  public formBuilder: FormBuilder, public userService: UserService, public router: Router,
     public localStorageService: LocalStorageService) { }


ngOnInit() {
    this.createForm();
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.id = params.userId;
        console.log(this.id);
      });
  }

  private createForm(): void {
    this.profileForm = this.formBuilder.group({
      streetName: ['', [Validators.required]],
      expert:     ['', [Validators.required]],
      role:       ['', [Validators.required]],
      bio:        ['', [Validators.required]],
      cv:         ['', [Validators.required]],
      profilePic: ['', [Validators.required]],
      sampleArt:  ['', [Validators.required]]
    });
  }

  onCvSelect(event) {
    this.cv = event.target.files[0];
    }
  onProfilePicSelect(event) {
    this.profilePic = event.target.files[0];
   }
  onSampleArtSelect(event) {
    this.sampleArt = event.target.files[0];
  }

  onSubmit() {
  
    this.profileForm.value.cv = this.cv;
    this.profileForm.value.profilePic = this.profilePic;
    this.profileForm.value.sampleArt = this.sampleArt;
    
    const profileFormData = new FormData();
    profileFormData.append('streetName', this.profileForm.value.streetName);
    profileFormData.append('expert', this.profileForm.value.expert);
    profileFormData.append('role', this.profileForm.value.role);
    profileFormData.append('bio', this.profileForm.value.bio);
    profileFormData.append('CV', this.profileForm.value.cv);
    profileFormData.append('profilepic', this.profileForm.value.profilePic);
    profileFormData.append('sampleart', this.profileForm.value.sampleArt);
    
    console.log(this.profileForm.value);
    this.userService.updateProfile(this.id, profileFormData).subscribe((res) => {
      console.log(res);
      this.router.navigate(['home']);
    }, (err) => {
      console.log(err);
    });
  }

}
